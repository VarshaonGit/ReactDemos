package come.dpl.day3;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Scanner;

import javax.net.ssl.SSLContext;

public class Demo1 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/demo1?characterEncoding=latin1", "root", "root");
			Statement stmt = con.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
			ResultSet rs = stmt.executeQuery("select * from employee");
			rs.next();
			rs.updateInt(1, 0);
			rs.updateRow();
			System.out.println("1th row update");
			rs.moveToInsertRow();
			System.out.println("enter update data");
			System.out.println("enter id :");
			rs.updateInt(1, sc.nextInt());
			sc.nextLine();
			System.out.print("enter name :");
			rs.updateString(2, sc.nextLine());
			System.out.print("enter Address:");
			rs.updateString(3, sc.nextLine());
			System.out.print("enter City:");
			rs.updateString(4, sc.nextLine());
			rs.insertRow();
			System.out.println("1 row inserted");
			System.out.println("After Updation");
			con.close();
		} catch (Exception e) {
			System.out.println(e);
		}

		sc.close();
	}

}