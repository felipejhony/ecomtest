package br.fj.comprasrest.connection;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public class Connection {

	private static final EntityManagerFactory entityManagerFactory;

    static {
        try {
            entityManagerFactory = Persistence.createEntityManagerFactory("comprasrest.pu");
        } catch (Throwable ex) {
            throw new ExceptionInInitializerError(ex);
        }
    }

    public static EntityManagerFactory getEntityManagerFactory() {
        return entityManagerFactory;
    }
}
