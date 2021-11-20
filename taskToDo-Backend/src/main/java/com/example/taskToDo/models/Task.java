package com.example.taskToDo.models;

import java.sql.Date;

public class Task {
  
  private Long id;
  private Long idFolder;
  private Long idUser;
  private String title;
  private String description;
  private Boolean complete;
  private Date dateCreation;
  private Date dateFinished;

  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Long getIdFolder() {
    return this.idFolder;
  }

  public void setIdFolder(Long idFolder) {
    this.idFolder = idFolder;
  }

  public Long getIdUser() {
    return this.idUser;
  }

  public void setIdUser(Long idUser) {
    this.idUser = idUser;
  }

  public String getTitle() {
    return this.title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return this.description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public Boolean isComplete() {
    return this.complete;
  }

  public Boolean getComplete() {
    return this.complete;
  }

  public void setComplete(Boolean complete) {
    this.complete = complete;
  }

  public Date getDateCreation() {
    return this.dateCreation;
  }

  public void setDateCreation(Date dateCreation) {
    this.dateCreation = dateCreation;
  }

  public Date getDateFinished() {
    return this.dateFinished;
  }

  public void setDateFinished(Date dateFinished) {
    this.dateFinished = dateFinished;
  }

}
