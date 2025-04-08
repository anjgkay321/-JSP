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

* {
	/* 	border: 1px solid; */
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
	overflow: auto;
}

.wrapper>main>h2 {
	text-align: center;
	font-size: 1.8rem;
	font-weight: 400;
}

.wrapper>main>table {
	border: 1px solid;
	border-collapse: collapse;
	min-width: 500px;
	min-height: 30px;
	margin: 0 auto;
}

.wrapper>main table th, .wrapper>main table td {
	min-width: 80px !important;
	min-height: 20px !important;
	border: 1px solid;
	text-align: center;
}

.wrapper>footer {
	height: 80px;
}
</style>
</head>
<body>
	<%@page
		import="Utils.*,java.util.*,java.time.format.DateTimeFormatter,java.time.LocalDate,java.time.Period"%>
	<%
	List<VoteDto> list = DBUtils.getInstance().updateVote();
	%>
	<div class="wrapper">
		<!--  -->
		<%@include file="/layouts/Header.jsp"%>

		<%@include file="/layouts/Nav.jsp"%>

		<main>
			<h2>투표검수조회</h2>
			<table>
				<tr>
					<th>성명</th>
					<th>생년월일</th>
					<th>나이</th>
					<th>성별</th>
					<th>후보번호</th>
					<th>투표시간</th>
					<th>유권자 확인</th>
				</tr>
				<%
				for (VoteDto vto : list) {
				%>
				<tr>
					<td><%=vto.getV_name()%></td>
					<%
					String birthYear = vto.getV_jumin().substring(0, 6);//860918
					int yy=Integer.parseInt(birthYear.substring(0,2));
					int now = LocalDate.now().getYear()%100;
					if(yy>0 && yy<=now){
						birthYear ="20" + birthYear;
					}else{
						birthYear ="19" + birthYear;
					}
					//입력 포맷(yyMMdd)
					DateTimeFormatter infmt = DateTimeFormatter.ofPattern("yyyyMMdd");
					LocalDate myBirth = LocalDate.parse(birthYear,infmt);
					//출력 포맷
					DateTimeFormatter outfmt = DateTimeFormatter.ofPattern("yyyy년MM월dd일생");
					out.println("<td>"+myBirth.format(outfmt)+"</td>");
					%>
					<%
					String age = vto.getV_jumin().substring(0, 6);//860918
					age = "19" + age;
					DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyyMMdd");
					LocalDate date = LocalDate.parse(age, formatter);
					LocalDate today = LocalDate.now();

					int manAge = Period.between(date, today).getYears();
					out.println("<td>만" + manAge + " 세</td>");
					%>
					<%-- <td><%=vto.getV_jumin()%></td> --%>
					<%
					char gender = vto.getV_jumin().charAt(6);
					if (gender % 2 == 0)
						out.print("<td>여</td>");
					else
						out.print("<td>남</td>");
					%>
					<%-- <td><%=vto.getV_jumin()%></td> --%>
					<td><%=vto.getM_no()%></td>
					<%-- <td><%=vto.getV_time()%></td> --%>
					<%
					String Time = vto.getV_time().substring(0, 2);
					String Time2 = vto.getV_time().substring(2,4);
					out.println("<td>"+Time + ":" +  Time2 + " </td>");
					%>
					<td><%=vto.getV_confirm()%></td>
				</tr>
				<%
				}
				%>
			</table>
		</main>

		<%@include file="/layouts/Footer.jsp"%>

	</div>

</body>
</html>