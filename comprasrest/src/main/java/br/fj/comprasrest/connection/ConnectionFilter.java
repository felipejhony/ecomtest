package br.fj.comprasrest.connection;

import java.io.IOException;

import javax.persistence.EntityManager;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.annotation.WebFilter;

@WebFilter("/*")
public class ConnectionFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		EntityManager em = Connection.getEntityManagerFactory().createEntityManager();

		try {
			
			em.getTransaction().begin();
			
			request.setAttribute("entityManager", em);
			
			chain.doFilter(request, response);
			
			em.getTransaction().commit();
			
		} catch (Exception e) {
			if (em.getTransaction().isActive()) {
				em.getTransaction().rollback();
			}
			throw new ServletException(e);
		} finally {
			em.close();
		}
	}

	@Override
	public void destroy() {
	}

}
