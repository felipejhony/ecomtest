package br.fj.comprasrest.endpoint;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import br.fj.comprasrest.domain.Produto;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("produto")
public class ProdutoEP {

    @SuppressWarnings("unchecked")
	@GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProdutos() {
    	
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
