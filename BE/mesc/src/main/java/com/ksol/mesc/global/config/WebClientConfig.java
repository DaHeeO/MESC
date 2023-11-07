package com.ksol.mesc.global.config;

import java.time.Duration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;

import io.netty.channel.ChannelOption;
import lombok.extern.slf4j.Slf4j;
import reactor.netty.http.client.HttpClient;
import reactor.netty.resources.ConnectionProvider;

@Configuration
@Slf4j
public class WebClientConfig {

	HttpClient httpClient = HttpClient.create()
		.option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 10000);

	@Bean
	public WebClient webClient() {
		return WebClient.builder()
//			.baseUrl("http://localhost:8081/mes")
			.baseUrl("https://www.mescadmin.kr/api/mes")
			.codecs(
				configurer -> configurer.defaultCodecs().maxInMemorySize(2 * 1024 * 1024))
			.clientConnector(new ReactorClientHttpConnector(httpClient))
			.build();
	}

	@Bean
	public ConnectionProvider connectionProvider() {
		return ConnectionProvider.builder("http-pool")
			.maxConnections(100)
			.pendingAcquireTimeout(Duration.ofMillis(5000))
			.pendingAcquireMaxCount(-1)
			.maxIdleTime(Duration.ofMillis(5000L))
			.build();
	}
}
