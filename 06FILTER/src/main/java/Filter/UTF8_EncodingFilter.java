package Filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;

public class UTF8_EncodingFilter implements Filter{

	@Override
	public void doFilter(ServletRequest req, ServletResponse resp, FilterChain chain)
			throws IOException, ServletException {
		
		//전
		req.setCharacterEncoding("UTF-8");
		chain.doFilter(req, resp);
		//후
		resp.setContentType("text/html; charset=UTF-8");
	}

}
