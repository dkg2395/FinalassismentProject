package com.lti.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Customer_Bank {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "name", nullable = false)
	private String name;

	@Column(name = "age", nullable = false)
	
	private int age;

	

	@Column(name = "typeofAccount")
	private String typeofAccount;



	public Customer_Bank() {
		super();
		// TODO Auto-generated constructor stub
	}



	public Customer_Bank(int id, String name, int age, String typeofAccount) {
		super();
		this.id = id;
		this.name = name;
		this.age = age;
		this.typeofAccount = typeofAccount;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getAge() {
		return age;
	}



	public void setAge(int age) {
		this.age = age;
	}



	public String getTypeofAccount() {
		return typeofAccount;
	}



	public void setTypeofAccount(String typeofAccount) {
		this.typeofAccount = typeofAccount;
	}



	@Override
	public String toString() {
		return "Customer_Bank [id=" + id + ", name=" + name + ", age=" + age + ", typeofAccount=" + typeofAccount + "]";
	}



}
