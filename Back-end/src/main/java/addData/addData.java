package addData;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import crud.crud;




@WebServlet("/addData")
public class addData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public addData() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
			
	}
	



	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		System.out.println(request);
		String business_code = request.getParameter("business_code");
		String cust_number = request.getParameter("cust_number");
		String clear_date = request.getParameter("clear_date");
		int buisness_year = Integer.parseInt(request.getParameter("buisness_year"));
		String doc_id = request.getParameter("doc_id");
		String posting_date = request.getParameter("posting_date");
		String document_create_date  = request.getParameter("document_create_date");
		String due_in_date = request.getParameter("due_in_date");
		String invoice_currency = request.getParameter("invoice_currency");
		String document_type = request.getParameter("document_type");
		int posting_id = Integer.parseInt(request.getParameter("posting_id"));
		double total_open_amount = Double.parseDouble(request.getParameter("total_open_amount"));
		String baseline_create_date = request.getParameter("baseline_create_date");
		String cust_payment_terms = request.getParameter("cust_payment_terms");
		int invoice_id = Integer.parseInt(request.getParameter("invoice_id"));


		crud insertData = new crud();
		insertData.addData(business_code, cust_number, clear_date, buisness_year, doc_id, posting_date, document_create_date, due_in_date, invoice_currency, document_type, posting_id, total_open_amount, baseline_create_date, cust_payment_terms, invoice_id);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.getWriter().append("Data Inserted");
	}

}
