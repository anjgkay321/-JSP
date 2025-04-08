package Utils;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class DBUtils {
	
	private String url = "jdbc:oracle:thin:@localhost:1521:xe";
	private String id = "system";
	private String pw = "1234";
	
	private Connection conn;
	private PreparedStatement pstmt;
	private ResultSet rs;	
	
	//싱글톤 
	private static DBUtils instance;
	private DBUtils() throws Exception {
		Class.forName("oracle.jdbc.driver.OracleDriver");
		conn = DriverManager.getConnection(url, id, pw);
	}
	public static DBUtils getInstance() throws Exception {
		if(instance==null)
			instance = new DBUtils();
		return instance;
	}
	
//	select M.M_NO,M.M_NAME,P.P_NAME,M.P_SCHOOL,M.M_JUMIN,M.M_CITY,P.P_TEL1,P.P_TEL2,P.P_TEL3
//	from TBL_MEMBER_202005 M
//	join TBL_PARTY_202005 P
//	on M.P_CODE=P.P_CODE;
	public List<MemberDto> selectAllMember() throws Exception{
		String sql="select M.M_NO,M.M_NAME,P.P_NAME,M.P_SCHOOL,M.M_JUMIN,M.M_CITY,P.P_TEL1,P.P_TEL2,P.P_TEL3"
				+ " from TBL_MEMBER_202005 M"
				+ " join TBL_PARTY_202005 P"
				+ " on M.P_CODE=P.P_CODE"
				;
		
		pstmt = conn.prepareStatement(sql);
		rs = pstmt.executeQuery();
		List<MemberDto> list = new ArrayList();
		MemberDto dto = null;
		if(rs!=null) {
			
			while(rs.next()) {
				dto = new MemberDto();	
				dto.setM_no(rs.getString(1));
				dto.setM_name(rs.getString(2));
				dto.setP_name(rs.getString(3));
				dto.setP_school(rs.getString(4));
				dto.setM_jumin(rs.getString(5));
				dto.setM_city(rs.getString(6));
				dto.setP_tel1(rs.getString(7));
				dto.setP_tel2(rs.getString(8));
				dto.setP_tel3(rs.getString(9));
				list.add(dto);
			}
		}
		
		pstmt.close();
		rs.close();
		return list;
	}

	
	public int insertVote(VoteDto vto) throws Exception {
		
		pstmt = conn.prepareStatement("insert into TBL_VOTE_202005 values(?,?,?,?,?,?)");
		pstmt.setString(1, vto.getV_jumin());
		pstmt.setString(2, vto.getV_name());
		pstmt.setString(3, vto.getM_no());
		pstmt.setString(4, vto.getV_time());
		pstmt.setString(5, vto.getV_area());
		pstmt.setString(6, vto.getV_confirm());
		
		int result = pstmt.executeUpdate();
		
		pstmt.close();
		return result;
	}
	public List<VoteDto> updateVote() throws SQLException{
		String sql="select*from tbl_vote_202005";
		
		pstmt = conn.prepareStatement(sql);
		rs = pstmt.executeQuery();
		List<VoteDto> list = new ArrayList();
		VoteDto vto = null;
		if(rs !=null) {
			while(rs.next()) {
				vto = new VoteDto();
				vto.setV_jumin(rs.getString(1));
				vto.setV_name(rs.getString(2));
				vto.setM_no(rs.getString(3));
				vto.setV_time(rs.getString(4));
				vto.setV_area(rs.getString(5));
				vto.setV_confirm(rs.getString(6));
				list.add(vto);
			}
		}
		pstmt.close();
		rs.close();
		return list;
				
	}
	public List<MemberDto> AllMember() throws Exception{
//		SELECT M.M_NO, M.M_name, COUNT(*)
//		FROM tbl_member_202005 M
//		JOIN tbl_vote_202005 V 
//		ON M.M_NO = V.M_NO
//		GROUP BY M.M_NO, M.M_name
//		order by count(*) desc;
		String sql="SELECT M.M_NO, M.M_name, COUNT(*)"
				+ " FROM tbl_member_202005 M"
				+ " JOIN tbl_vote_202005 V "
				+ " ON M.M_NO = V.M_NO"
				+ " GROUP BY M.M_NO, M.M_name"
				+ " order by count(*) desc";
		pstmt = conn.prepareStatement(sql);
		rs = pstmt.executeQuery();
		List<MemberDto> list = new ArrayList();
		MemberDto dto = null;
		if(rs!=null) {
			while(rs.next()) {
				dto = new MemberDto();
				dto.setM_no(rs.getString(1));
				dto.setM_name(rs.getString(2));
				dto.setCount(rs.getString(3));
				list.add(dto);
			}
		}
		pstmt.close();
		rs.close();
		return list;
		
	}
	
	
}







