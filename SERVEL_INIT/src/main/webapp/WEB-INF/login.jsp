<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>LOGIN PAGE</h1>
	<form action="${pageContext.request.contextPath}/login.do"
		method="post">
		<lable>아이디 : </lable>
		<input type="text" name="username" /><br /> 
		<label>비밀번호 : </label>
		<input type="text" name="password" /><br />
		<button>로그인</button>
	</form>
	<div>
		${username_msg}
	</div>
	<div>
		${password_msg}
	</div>
</body>
</html>