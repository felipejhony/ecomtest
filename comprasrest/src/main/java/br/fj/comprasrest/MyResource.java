package br.fj.comprasrest;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

/**
 * Root resource (exposed at "myresource" path)
 */
@Path("myresource")
public class MyResource {

    /**
     * Method handling HTTP GET requests. The returned object will be sent
     * to the client as "text/plain" media type.
     *
     * @return String that will be returned as a text/plain response.
     */
    @SuppressWarnings("unchecked")
	@GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getIt() {
    	
    	final EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("comprasrest.pu");
        final EntityManager entityManager = entityManagerFactory.createEntityManager();
    	
        Query q = entityManager.createQuery("select e from Produto e");
        
        List<Produto> resultList = q.getResultList();
        
        System.out.println(resultList);
        
        entityManager.close();
        entityManagerFactory.close();
        
        return Response.ok(resultList).build();
    }
  
}
