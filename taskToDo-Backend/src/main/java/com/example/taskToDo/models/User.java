package com.example.taskToDo.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

  //Attributes
  @Id
  @GeneratedValue(strategy =  GenerationType.IDENTITY)
  private Long id;
  private String name;
  private String password;

  @OneToMany(mappedBy = "user",cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
  private List<Folder> folders;

  //Constructor
  public User(Long id, String name, String password) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
  
  //Methods
  public void addFolder(Folder folder){
    if(folders == null) this.folders = new ArrayList<>();
    this.folders.add(folder);
    folder.setUser(this);
  }

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPassword() {
    return this.password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

}
