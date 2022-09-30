package com.luv2code.ecommerce.config;

import com.luv2code.ecommerce.entity.Product;
import com.luv2code.ecommerce.entity.ProductCategory;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] theUnsupportedActions = {HttpMethod.POST, HttpMethod.DELETE, HttpMethod.PUT};

        // disable http methods for product: PUT, DELETE, POST
        config.getExposureConfiguration()
                .forDomainType(Product.class)
                .withItemExposure( (metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure( (metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));


        // disable http methods for category: PUT, DELETE, POST
        config.getExposureConfiguration()
                .forDomainType(ProductCategory.class)
                .withItemExposure( (metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
                .withCollectionExposure( (metadata, httpMethods) -> httpMethods.disable(theUnsupportedActions));


    }
}
