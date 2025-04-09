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
	public int Join(JoinDto dto) throws SQLException {
		String sql="insert into TBL_VACCRESV_202109 values(resvNo,jumin,vcode,hospCode,resvDate,resvTime)";
		pstmt= conn.prepareStatement(sql);
		
		pstmt.setInt(1,dto.getResvNo());
		pstmt.setString(2, dto.getJumin());
		pstmt.setString(3, dto.getVcode());
		pstmt.setString(4, dto.getHospCode());
		pstmt.setString(5, dto.getResvDate());
		pstmt.setInt(6, dto.getResvTime());
		
		int result = pstmt.executeUpdate();
		
		conn.commit();
		pstmt.close();
		return result;
		
	}
}







