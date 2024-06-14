package br.fj.comprasrest.endpoint;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.Query;

import br.fj.comprasrest.domain.Produto;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.DELETE;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.PATCH;
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

	@PATCH
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateProduto(Produto produto, @Context HttpServletRequest request) {

		EntityManager em = (EntityManager) request.getAttribute("entityManager");

		em.merge(produto);

		return Response.ok().build();
	}

	@DELETE
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deletarProduto(Produto produto, @Context HttpServletRequest request) {

		EntityManager em = (EntityManager) request.getAttribute("entityManager");

		Produto produtoGerenciado = em.find(Produto.class, produto.getId());

		if (produtoGerenciado != null) {
			em.remove(produtoGerenciado);
		} else {
			em.getTransaction().rollback();
			return Response.status(Response.Status.NOT_FOUND).build();
		}

		return Response.ok().build();
	}

	@POST
    @Consumes(MediaType.APPLICATION_JSON)
    public Response novoProduto(Produto produto, @Context HttpServletRequest request) {
		
		EntityManager em = (EntityManager) request.getAttribute("entityManager");
		
		produto.setId(getNextId(em));
		
        em.persist(produto);
        
        return Response.ok().build();
    }

	public int getNextId(EntityManager em) {
		
		String sql = "select max(e.id) from Produto e";
		Query query = em.createQuery(sql);
		
		int maxId = 0;

		try {
			maxId = (int) query.getSingleResult();
		} catch (NoResultException e) {
			return 1;
		}

		if (maxId == 0) {
			return 1;
		}

		return maxId + 1;
	}

}
