package br.fj.comprasrest.endpoint;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.Query;

import br.fj.comprasrest.domain.Produto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("produto")
public class ProdutoEP {

    @SuppressWarnings("unchecked")
	@GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getProdutos(@Context HttpServletRequest request) {
    	
    	EntityManager em = (EntityManager) request.getAttribute("entityManager");
    	
        Query q = em.createQuery("select e from Produto e");
        
        List<Produto> resultList = q.getResultList();
        
        return Response.ok(resultList).build();
    }
    
	@POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response updateProduto(Produto produto, @Context HttpServletRequest request) {
		
		EntityManager em = (EntityManager) request.getAttribute("entityManager");
    	
        em.merge(produto);
        
        return Response.ok().build();
    }
  
}
