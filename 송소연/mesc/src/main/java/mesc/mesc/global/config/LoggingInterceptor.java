package mesc.mesc.global.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
@Slf4j
public class LoggingInterceptor implements HandlerInterceptor {
	// 컨트롤러의 메서드에 매핑된 특정 URI가 호출됐을 때 실행되는 메서드로, 컨트롤러를 경유(접근)하기 직전에 실행되는 메서드입니다.
	// 우리는 사용자가 어떠한 기능을 수행했는지를 파악하기 위하여 해당 기능과 매핑된 URI 정보가 콘솔에 로그가 출력되도록 처리합니다.
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws
		Exception {

		String clientType = request.getHeader("Client-Type");
		// 클라이언트 타입(앱 또는 웹)에 따른 로그 메시지 작성
		if (clientType.equals("app")) {
			log.info("[preHandle][app] : " + request.getMethod() + " : " + request.getRequestURI() + " request start");
		} else if (clientType.equals("web")) {
			log.info("[preHandle][web] : " + request.getMethod() + " : " + request.getRequestURI() + " request start");
		} else {
			log.info(
				"[preHandle][unknown] : " + request.getMethod() + " : " + request.getRequestURI() + " request start");
		}
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
		ModelAndView modelAndView) throws Exception {
		String clientType = request.getHeader("Client-Type");
		if (clientType.equals("app")) {
			log.info("[postHandle][app] : " + request.getMethod() + " : " + request.getRequestURI() + " request done");
		} else if (clientType.equals("web")) {
			log.info("[postHandle][web] : " + request.getMethod() + " : " + request.getRequestURI() + " request done");
		} else {
			log.info(
				"[postHandle][unknown] : " + request.getMethod() + " : " + request.getRequestURI() + " request done");
		}
	}
}
