package com.lti.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.lti.model.Customer_Bank;

public interface CustomerRepository extends JpaRepository<Customer_Bank, Integer> {
	
}