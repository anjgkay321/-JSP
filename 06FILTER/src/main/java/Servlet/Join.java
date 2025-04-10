package Servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import Utils.OracleDBUtils;
import Utils.UserDto;

/*@WebServlet("/join.do")*/
public class Join extends HttpServlet {

	// GET - /join.do - /WEB-INF/user/join.jsp 연결
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("GET 조인");
		req.getRequestDispatcher("/WEB-INF/user/join.jsp").forward(req, resp);
	}

	// POST - /join.do - 회원가입처리(username,password 받아 DBUtils를 이용한 DB INSERT)
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("HOST 조인");
		// 파라미터받기
		String username = req.getParameter("username");
		String password = req.getParameter("password");

		System.out.println("Post /joindo username :" + username);
		UserDto userDto = new UserDto(username, password,"ROLE_USER");
		try {

			int result = OracleDBUtils.getInstance().insertUser(userDto);
			if (result > 0) {
				 resp.sendRedirect(req.getContextPath() + "/login.do");
			} else {
				req.setAttribute("errorMessage", "회원가입에 실패했습니다.");
				req.getRequestDispatcher("/WEB-INF/user/join.jsp").forward(req, resp);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	// 테이블 : tbl_user(요청 파라미터에 맞게 적절히 생성)
	// 성공시 - /login.do 로 리다이렉트
	// 실패시 - /join.do 로 포워딩

}
