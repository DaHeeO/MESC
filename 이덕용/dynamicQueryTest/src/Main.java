import java.sql.*;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        // Press Alt+Enter with your caret at the highlighted text to see how
        // IntelliJ IDEA suggests fixing it.
        System.out.printf("Hello and welcome!");

        new Main();
    }

    private Connection con;
    private Statement stmt;
    private ResultSet rs;
    public Main() {
        try {
            String url = "jdbc:mysql://localhost:3306/blocktest?useSSL=false&serverTimezone=Asia/Seoul&characterEncoding=UTF-8&allowPublicKeyRetrieval=true";
            String user = "root";
            String password = "ssafy";

            con = DriverManager.getConnection(url, user, password);
            System.out.println("DB연결 성공");

            stmt = con.createStatement();
            System.out.println("Statement객체 생성 성공");

            rs = stmt.executeQuery("select * from block bl inner join button bt on bl.BL_ID = bt.BL_ID"); //조회한 결과들을 ResultSet에 rs에 저장한다.

            rs.close();
            stmt.close();
            con.close();

        } catch (SQLException e) {
            System.out.println("DB연결 실패하거나, SQL문이 틀렸습니다.");
            System.out.print("사유 : " + e.getMessage());
        }
    }
}