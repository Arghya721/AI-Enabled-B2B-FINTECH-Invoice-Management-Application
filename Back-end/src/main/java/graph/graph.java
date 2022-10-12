package graph;

import java.io.IOException;


import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import crud.crud;
import com.google.gson.Gson;





@WebServlet("/graph")
public class graph extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public graph() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		crud fetchdata=new crud();
		
		String clear_date1 = request.getParameter("clear_date1");
		String clear_date2 = request.getParameter("clear_date2");
		
		String due_date1 = request.getParameter("due_date1");
		String due_date2 = request.getParameter("due_date2");
		
		String baseline_date1 = request.getParameter("baseline_date1");
		String baseline_date2 = request.getParameter("baseline_date2");
		
		
		
		 
		  String data = fetchdata.graphData(clear_date1,clear_date2,due_date1,due_date2,baseline_date1,baseline_date2);
		  //System.out.println(data);
		  	
		  	Gson gson = new Gson();
			String respData = gson.toJson(data);
			response.setHeader("Access-Control-Allow-Origin","*");
			response.getWriter().append(respData);
			
	}
	



	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

}
