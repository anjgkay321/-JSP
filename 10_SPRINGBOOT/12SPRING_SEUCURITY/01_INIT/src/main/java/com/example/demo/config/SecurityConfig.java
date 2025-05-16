package com.example.demo.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	@Bean
	protected SecurityFilterChain configure(HttpSecurity http) throws Exception {
		//CSRF비활성화
		http.csrf((config)->{config.disable();});
		//CSRF토큰 쿠키형태로 전달
//		http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse());
		//권한체크
		http.authorizeHttpRequests((auth)->{
			auth.requestMatchers("/","/join","/login").permitAll();
			auth.requestMatchers("/user").hasRole("USER");
			auth.requestMatchers("/manager").hasRole("MANAGER");
			auth.requestMatchers("/admin").hasRole("ADMIN");
			auth.anyRequest().authenticated();
		});

		//로그인
		http.formLogin((login)->{
			login.permitAll();
//			login.loginPage("/login");
		});
		//로그아웃
		http.logout((logout)->{
			logout.permitAll();
		});
		//예외처리
		http.exceptionHandling((ex)->{});

		return http.build();
		
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
