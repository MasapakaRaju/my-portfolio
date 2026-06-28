package com.portfolio.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.env.EnvironmentPostProcessor;
import org.springframework.core.env.ConfigurableEnvironment;
import org.springframework.core.env.MapPropertySource;

import java.net.URI;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class RenderDatabaseUrlInitializer implements EnvironmentPostProcessor {

    @Override
    public void postProcessEnvironment(ConfigurableEnvironment environment, SpringApplication application) {
        if (hasText(environment.getProperty("SPRING_DATASOURCE_URL"))) {
            return;
        }

        String databaseUrl = environment.getProperty("DATABASE_URL");
        if (!hasText(databaseUrl)) {
            return;
        }

        DatabaseConnection connection = parseDatabaseUrl(databaseUrl);
        Map<String, Object> properties = new HashMap<>();
        properties.put("spring.datasource.url", connection.jdbcUrl());
        properties.put("spring.datasource.username", connection.username());
        properties.put("spring.datasource.password", connection.password());

        environment.getPropertySources().addFirst(new MapPropertySource("renderDatabaseUrl", properties));
    }

    private DatabaseConnection parseDatabaseUrl(String databaseUrl) {
        URI uri = URI.create(databaseUrl);
        String[] credentials = decode(uri.getRawUserInfo()).split(":", 2);
        String username = credentials.length > 0 ? credentials[0] : "";
        String password = credentials.length > 1 ? credentials[1] : "";
        String path = uri.getPath() == null ? "" : uri.getPath();
        String query = uri.getQuery() == null ? "" : "?" + uri.getQuery();
        int port = uri.getPort() == -1 ? 5432 : uri.getPort();
        String jdbcUrl = "jdbc:postgresql://" + uri.getHost() + ":" + port + path + query;

        return new DatabaseConnection(jdbcUrl, username, password);
    }

    private static String decode(String value) {
        if (value == null) {
            return "";
        }
        return URLDecoder.decode(value, StandardCharsets.UTF_8);
    }

    private static boolean hasText(String value) {
        return value != null && !value.isBlank();
    }

    private record DatabaseConnection(String jdbcUrl, String username, String password) {
    }
}
