package editData;

import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import crud.crud;



@WebServlet("/editData")
public class editData extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public editData() {
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
		
		int sl_no = Integer.parseInt(request.getParameter("sl_no"));
		
		String invoice_currency = request.getParameter("invoice_currency");
		
		String cust_payment_terms = request.getParameter("cust_payment_terms");
		


		crud insertData = new crud();
		insertData.EditData(sl_no , invoice_currency, cust_payment_terms);
		response.setHeader("Access-Control-Allow-Origin","*");
		response.getWriter().append("Data Edited");
	}

}

