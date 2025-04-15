package Listener;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/*@WebListener*/
public class C01ServletContextListener implements ServletContextListener{

	@Override
	public void contextInitialized(ServletContextEvent sce) {
		//----
		System.out.println("[LISTENER] C01ServletContextListener..start...");
	}
	
	@Override
	public void contextDestroyed(ServletContextEvent sce) {
		System.out.println("[LISTENER] C01ServletContextListener..end...");
	}



	
	
}
