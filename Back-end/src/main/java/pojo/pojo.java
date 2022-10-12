package pojo;

public class pojo {

	
	
	private Integer sl_no;
	private String business_code;
	private String cust_number;
	private String clear_date;
	private Integer buisness_year;
	private String doc_id;
	private String posting_date;
	private String document_create_date;
	private String document_create_date1;
	private String due_in_date;
	private String invoice_currency;
	private String document_type;
	private Integer posting_id;
	private Double total_open_amount;
	private String baseline_create_date;
	private String cust_payment_terms;
	private Integer invoice_id;
	private Integer isOpen;
 
	
	
	public Integer get_sl_no() {
		return sl_no;
	}
	public void set_sl_no(Integer x) {
		sl_no = x;
	}
	
	public String get_business_code() {
		return business_code;
	}
	public void set_business_code(String x) {
		business_code = x;
	}
	
	
	public String get_cust_number() {
		return cust_number;
	}
	public void set_cust_number(String x) {
		cust_number = x;
	}
	
	public String get_clear_date() {
		return clear_date;
	}
	public void set_clear_date(String x) {
		clear_date = x;
	}
	
	public Integer get_buisness_year() {
		return buisness_year;
	}
	public void set_buisness_year(Integer x) {
		buisness_year = x;
	}
	
	public String get_doc_id() {
		return doc_id;
	}
	public void set_doc_id(String x) {
		doc_id = x;
	}
	
	public String get_posting_date() {
		return posting_date;
	}
	public void set_posting_date(String x) {
		posting_date = x;
	}
	
	
	public String get_document_create_date() {
		return document_create_date;
	}
	public void set_document_create_date(String x) {
		document_create_date = x;
	}
	
	public String get_document_create_date1() {
		return document_create_date1;
	}
	public void set_document_create_date1(String x) {
		document_create_date1 = x;
	}
	
	public String get_due_in_date() {
		return due_in_date;
	}
	public void set_due_in_date(String x) {
		due_in_date = x;
	}
	
	public String get_invoice_currency() {
		return invoice_currency;
	}
	public void set_invoice_currency(String x) {
		invoice_currency = x;
	}
	
	public String get_document_type() {
		return document_type;
	}
	public void set_document_type(String x) {
		document_type = x;
	}
	
	public Integer get_posting_id() {
		return posting_id;
	}
	public void set_posting_id(Integer x) {
		posting_id = x;
	}
	
	public Double get_total_open_amount() {
		return total_open_amount;
	}
	public void set_total_open_amount(Double x) {
		total_open_amount = x;
	}
	
	
	public String get_baseline_create_date() {
		return baseline_create_date;
	}
	public void set_baseline_create_date(String x) {
		baseline_create_date = x;
	}
	
	public String get_cust_payment_terms() {
		return cust_payment_terms;
	}
	public void set_cust_payment_terms(String x) {
		cust_payment_terms = x;
	}
	
	
	public Integer get_invoice_id() {
		return invoice_id;
	}
	public void set_invoice_id(Integer x) {
		invoice_id = x;
	}
	
	public Integer get_isOpen() {
		return isOpen;
	}
	public void set_isOpen(Integer x) {
		isOpen = x;
	}
	
	
	@Override
	public String  toString() {
		return "sl_no :"+sl_no+"\n business_code : "+business_code+"\n cust_number : "+ cust_number+"\n clear_date : "+clear_date+"\n business_year: "+ buisness_year+"\n doc_id : "+doc_id+"\n		posting_date : "+ posting_date+"\n document_create_date : "+document_create_date+"\n document_create_date1 : "+document_create_date1+"\n due_in_date : "+due_in_date+"\ninvoice_currency : "+ invoice_currency+"\n document_type: "+document_type+"\n posting_id : "+ posting_id+"\n total_open_amount : "+total_open_amount+"\n baseline_create_date: "+baseline_create_date+"\n cust_payment_terms : "+cust_payment_terms+"\n invoice_id: "+invoice_id+"\n isOpen : "+isOpen+"\n ";
	}
}
