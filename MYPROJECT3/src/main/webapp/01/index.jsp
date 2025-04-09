<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style>
:root {
	
}

html {
	
}

* {
	box-sizing: border-box;
}

body {
	padding: 0;
	margin: 0;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

a {
	text-decoration: none;
	color: black;
}

.wrapper {
	
}

.wrapper>header {
	height: 80px;
}

.wrapper>nav {
	height: 50px;
}

.wrapper>main {
	height: calc(100vh - 80px - 50px - 80px);
	overflow:auto;
}

.wrapper>main h2 {
	text-align: center;
	font-size: 1.8rem;
	font-weight: 400;
}

.wrapper>main table {
	border: 1px solid;
	border-collapse: collapse;
	min-width: 500px;
	min-height: 350px;
	margin: 0 auto;
}

.wrapper>main table th, .wrapper>main table td {
	min-width: 80px !important;
	min-height: 25px !important;
	border: 1px solid;
	text-align: center;
}

.wrapper>main table th {
	background-color: lightgray;
}

.wrapper>footer {
	height: 80px;
}
</style>


</head>
<body>
	<%@page import="Utils.*,java.util.*" %>
	<div class="wrapper">
		<!--  -->
		<%@include file="/layouts/Header.jsp" %>
		
		<!--  -->
		<%@include file="/layouts/Nav.jsp" %>
		
		<main>
		
			<h2>백신예약</h2>
			
		<form action="ReserveServlet" method="post">
    주민번호: <input type="text" name="resvNo" placeholder="ex) 790101-1111111" required /><br/>

    백신코드:
    <select name="jumin" required>
        <option value="">-- 선택 --</option>
        <option value="V001">A백신</option>
        <option value="V002">B백신</option>
        <option value="V003">C백신</option>
    </select><br/>

    병원코드:
    <input type="radio" name="hospCode" value="H001" required /> 가_병원
    <input type="radio" name="hospCode" value="H002" /> 나_병원
    <input type="radio" name="hospCode" value="H003" /> 다_병원
    <input type="radio" name="hospCode" value="H004" /> 라_병원<br/>

    예약날짜: <input type="text" name="resvDate" placeholder="ex) 20210901" required /><br/>
    예약시간: <input type="text" name="resvTime" placeholder="ex) 0930" required /><br/>

    <button type="submit">등록</button>
    <button type="reset" onclick="alert('모든 정보를 지우고 처음부터 다시 입력합니다!')">취소</button>
</form>

		</main>
		
		<!--  -->
		<%@include file="/layouts/Footer.jsp" %>
	
	</div>

</body>
</html>