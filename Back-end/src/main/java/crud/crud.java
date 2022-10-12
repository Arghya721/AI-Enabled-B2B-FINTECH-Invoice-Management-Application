package crud;

import java.sql.*;
import java.util.*;
import pojo.pojo;

public class crud {
	public Connection getConnection() {
		Connection Con = null;
		String url = "jdbc:mysql://localhost/grey_goose";
		String user = "root";
		String pass = "721507";
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Con = DriverManager.getConnection(url, user, pass);
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return Con;
	}

	public ArrayList<pojo> getData() {
		ArrayList<pojo> AllStudents = new ArrayList<pojo>();

		int sl_no;
		String business_code;
		String cust_number;
		String clear_date;
		int buisness_year;
		String doc_id;
		String posting_date;
		String document_create_date;
		String document_create_date1;
		String due_in_date;
		String invoice_currency;
		String document_type;
		int posting_id;
		double total_open_amount;
		String baseline_create_date;
		String cust_payment_terms;
		int invoice_id;
		int isOpen;

		try {
			Connection con = getConnection();
			String sqlQuery = "SELECT * FROM winter_internship";
			PreparedStatement Pst = con.prepareStatement(sqlQuery);
			ResultSet rs = Pst.executeQuery();
			while (rs.next()) {
				pojo s = new pojo();
				sl_no = rs.getInt("sl_no");
				business_code = rs.getString("business_code");
				cust_number = rs.getString("cust_number");
				clear_date = rs.getString("clear_date");
				buisness_year = rs.getInt("buisness_year");
				doc_id = rs.getString("doc_id");
				posting_date = rs.getString("posting_date");
				document_create_date = rs.getString("document_create_date");
				document_create_date1 = rs.getString("document_create_date1");
				due_in_date = rs.getString("due_in_date");
				invoice_currency = rs.getString("invoice_currency");
				document_type = rs.getString("document_type");
				posting_id = rs.getInt("posting_id");
				total_open_amount = rs.getDouble("total_open_amount");
				baseline_create_date = rs.getString("baseline_create_date");
				cust_payment_terms = rs.getString("cust_payment_terms");
				invoice_id = rs.getInt("invoice_id");
				isOpen = rs.getInt("isOpen");

				s.set_sl_no(sl_no);
				s.set_business_code(business_code);
				s.set_cust_number(cust_number);
				s.set_clear_date(clear_date);
				s.set_buisness_year(buisness_year);
				s.set_doc_id(doc_id);
				s.set_posting_date(posting_date);
				s.set_document_create_date(document_create_date);
				s.set_document_create_date1(document_create_date1);
				s.set_due_in_date(due_in_date);
				s.set_invoice_currency(invoice_currency);
				s.set_document_type(document_type);
				s.set_posting_id(posting_id);
				s.set_total_open_amount(total_open_amount);
				s.set_baseline_create_date(baseline_create_date);
				s.set_cust_payment_terms(cust_payment_terms);
				s.set_invoice_id(invoice_id);
				s.set_isOpen(isOpen);
				AllStudents.add(s);
			}

		} catch (Exception e) {

			e.printStackTrace();
			System.out.print("error occured\n");

		}
		return AllStudents;

	}

	public void addData(
			String business_code,
			String cust_number,
			String clear_date,
			int buisness_year,
			String doc_id,
			String posting_date,
			String document_create_date,
			String due_in_date,
			String invoice_currency,
			String document_type,
			int posting_id,
			double total_open_amount,
			String baseline_create_date,
			String cust_payment_terms,
			int invoice_id) {

		try {
			Connection con = getConnection();
			String sqlQuery = "INSERT INTO winter_internship (business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			PreparedStatement Pst = con.prepareStatement(sqlQuery);
			Pst.setString(1, business_code);
			Pst.setString(2, cust_number);
			Pst.setString(3, clear_date);
			Pst.setInt(4, buisness_year);
			Pst.setString(5, doc_id);
			Pst.setString(6, posting_date);
			Pst.setString(7, document_create_date);
			Pst.setString(8, due_in_date);
			Pst.setString(9, invoice_currency);
			Pst.setString(10, document_type);
			Pst.setInt(11, posting_id);
			Pst.setDouble(12, total_open_amount);
			Pst.setString(13, baseline_create_date);
			Pst.setString(14, cust_payment_terms);
			Pst.setInt(15, invoice_id);
			Pst.executeUpdate();
			con.close();
			System.out.println("Data inserted");
		} catch (Exception e) {

			e.printStackTrace();
			System.out.print("error occured\n");

		}

	}

	public void EditData(int sl_no, String invoice_currency, String cust_payment_terms) {
		try {
			Connection con = getConnection();
			String sqlQuery = "UPDATE winter_internship SET invoice_currency=? , cust_payment_terms=? WHERE sl_no=?";
			PreparedStatement Pst = con.prepareStatement(sqlQuery);
			Pst.setString(1, invoice_currency);
			Pst.setString(2, cust_payment_terms);
			Pst.setInt(3, sl_no);
			Pst.executeUpdate();
			con.close();
			System.out.println("Data Edited");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.print("error occured\n");
		}
	}

	public void DelData(int sl_no) {
		try {
			Connection con = getConnection();
			String sqlQuery = "Delete from winter_internship WHERE sl_no=?";
			PreparedStatement Pst = con.prepareStatement(sqlQuery);
			Pst.setInt(1, sl_no);
			Pst.executeUpdate();
			con.close();
			System.out.println("Data Deleted");
		} catch (Exception e) {
			e.printStackTrace();
			System.out.print("error occured\n");
		}
	}

	public ArrayList<pojo> searchData(String cust_id) {
		ArrayList<pojo> AllStudents = new ArrayList<pojo>();

		int sl_no;
		String business_code;
		String cust_number;
		String clear_date;
		int buisness_year;
		String doc_id;
		String posting_date;
		String document_create_date;
		String document_create_date1;
		String due_in_date;
		String invoice_currency;
		String document_type;
		int posting_id;
		double total_open_amount;
		String baseline_create_date;
		String cust_payment_terms;
		int invoice_id;
		int isOpen;

		try {
			Connection con = getConnection();
			String sqlQuery = "SELECT * FROM winter_internship where cust_number LIKE '" + cust_id + "%';";
			PreparedStatement Pst = con.prepareStatement(sqlQuery);
			ResultSet rs = Pst.executeQuery();
			while (rs.next()) {
				pojo s = new pojo();
				sl_no = rs.getInt("sl_no");
				business_code = rs.getString("business_code");
				cust_number = rs.getString("cust_number");
				clear_date = rs.getString("clear_date");
				buisness_year = rs.getInt("buisness_year");
				doc_id = rs.getString("doc_id");
				posting_date = rs.getString("posting_date");
				document_create_date = rs.getString("document_create_date");
				document_create_date1 = rs.getString("document_create_date1");
				due_in_date = rs.getString("due_in_date");
				invoice_currency = rs.getString("invoice_currency");
				document_type = rs.getString("document_type");
				posting_id = rs.getInt("posting_id");
				total_open_amount = rs.getDouble("total_open_amount");
				baseline_create_date = rs.getString("baseline_create_date");
				cust_payment_terms = rs.getString("cust_payment_terms");
				invoice_id = rs.getInt("invoice_id");
				isOpen = rs.getInt("isOpen");

				s.set_sl_no(sl_no);
				s.set_business_code(business_code);
				s.set_cust_number(cust_number);
				s.set_clear_date(clear_date);
				s.set_buisness_year(buisness_year);
				s.set_doc_id(doc_id);
				s.set_posting_date(posting_date);
				s.set_document_create_date(document_create_date);
				s.set_document_create_date1(document_create_date1);
				s.set_due_in_date(due_in_date);
				s.set_invoice_currency(invoice_currency);
				s.set_document_type(document_type);
				s.set_posting_id(posting_id);
				s.set_total_open_amount(total_open_amount);
				s.set_baseline_create_date(baseline_create_date);
				s.set_cust_payment_terms(cust_payment_terms);
				s.set_invoice_id(invoice_id);
				s.set_isOpen(isOpen);
				AllStudents.add(s);
			}

		} catch (Exception e) {

			e.printStackTrace();
			System.out.print("error occured\n");

		}
		return AllStudents;
	}

	public ArrayList<pojo> advData(String doc, String invoice, String cust, String buisness) {
		ArrayList<pojo> AllStudents = new ArrayList<pojo>();

		int sl_no;
		String business_code;
		String cust_number;
		String clear_date;
		int buisness_year;
		String doc_id;
		String posting_date;
		String document_create_date;
		String document_create_date1;
		String due_in_date;
		String invoice_currency;
		String document_type;
		int posting_id;
		double total_open_amount;
		String baseline_create_date;
		String cust_payment_terms;
		int invoice_id;
		int isOpen;

		try {
			Connection con = getConnection();
			String sqlQuery = "SELECT * FROM winter_internship where doc_id LIKE '" + doc + "%' AND invoice_id LIKE '"
					+ invoice + "%' AND cust_number LIKE '" + cust + "%' AND buisness_year LIKE '" + buisness + "%'";
			PreparedStatement Pst = con.prepareStatement(sqlQuery);
			ResultSet rs = Pst.executeQuery();
			while (rs.next()) {
				pojo s = new pojo();
				sl_no = rs.getInt("sl_no");
				business_code = rs.getString("business_code");
				cust_number = rs.getString("cust_number");
				clear_date = rs.getString("clear_date");
				buisness_year = rs.getInt("buisness_year");
				doc_id = rs.getString("doc_id");
				posting_date = rs.getString("posting_date");
				document_create_date = rs.getString("document_create_date");
				document_create_date1 = rs.getString("document_create_date1");
				due_in_date = rs.getString("due_in_date");
				invoice_currency = rs.getString("invoice_currency");
				document_type = rs.getString("document_type");
				posting_id = rs.getInt("posting_id");
				total_open_amount = rs.getDouble("total_open_amount");
				baseline_create_date = rs.getString("baseline_create_date");
				cust_payment_terms = rs.getString("cust_payment_terms");
				invoice_id = rs.getInt("invoice_id");
				isOpen = rs.getInt("isOpen");

				s.set_sl_no(sl_no);
				s.set_business_code(business_code);
				s.set_cust_number(cust_number);
				s.set_clear_date(clear_date);
				s.set_buisness_year(buisness_year);
				s.set_doc_id(doc_id);
				s.set_posting_date(posting_date);
				s.set_document_create_date(document_create_date);
				s.set_document_create_date1(document_create_date1);
				s.set_due_in_date(due_in_date);
				s.set_invoice_currency(invoice_currency);
				s.set_document_type(document_type);
				s.set_posting_id(posting_id);
				s.set_total_open_amount(total_open_amount);
				s.set_baseline_create_date(baseline_create_date);
				s.set_cust_payment_terms(cust_payment_terms);
				s.set_invoice_id(invoice_id);
				s.set_isOpen(isOpen);
				AllStudents.add(s);
			}

		} catch (Exception e) {

			e.printStackTrace();
			System.out.print("error occured\n");

		}
		return AllStudents;
	}

	public String graphData(String cl_dt1, String cl_dt2, String due_dt1, String due_dt2, String base_dt1,
			String base_dt2) {
		String data = "";
		try {
			Connection con = getConnection();
			String Sqlusd = "SELECT COUNT(*) FROM winter_internship WHERE clear_date BETWEEN ? AND ? AND due_in_date BETWEEN ? AND ? AND baseline_create_date BETWEEN ? AND ? AND invoice_currency='USD';";
			String Sqlcad = "SELECT COUNT(*) FROM winter_internship WHERE clear_date BETWEEN ? AND ? AND due_in_date BETWEEN ? AND ? AND baseline_create_date BETWEEN ? AND ? AND invoice_currency='CAD';";
			PreparedStatement cad = con.prepareStatement(Sqlcad);
			PreparedStatement usd = con.prepareStatement(Sqlusd);
			cad.setString(1, cl_dt1);
			cad.setString(2, cl_dt2);
			cad.setString(3, due_dt1);
			cad.setString(4, due_dt2);
			cad.setString(5, base_dt1);
			cad.setString(6, base_dt2);
			usd.setString(1, cl_dt1);
			usd.setString(2, cl_dt2);
			usd.setString(3, due_dt1);
			usd.setString(4, due_dt2);
			usd.setString(5, base_dt1);
			usd.setString(6, base_dt2);
			ResultSet us = usd.executeQuery();
			ResultSet ca = cad.executeQuery();
			while (us.next()) {
				data = us.getString(1);
			}
			data = data + ",";
			while (ca.next()) {
				data = data + ca.getString(1);
			}
		} catch (Exception e) {

			e.printStackTrace();
			System.out.print("error occured\n");
		}
		return data;
	}

}