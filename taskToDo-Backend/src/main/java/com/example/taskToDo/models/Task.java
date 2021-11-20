package com.example.taskToDo.models;

import java.sql.Date;

import javax.persistence.*;

@Entity
@Table(name = "task")
public class Task {

  //Attributes
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(unique = true, nullable = false)
  private Long id;
  @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH})
  @JoinColumn(name = "folder_id")
  private Folder folder;
  private String title;
  private String description;
  private Boolean complete;
  private Date dateCreation;
  private Date dateFinished;

  //Constructor
  public Task(String title, String description, Boolean complete, Date dateCreation, Date dateFinished) {
    this.title = title;
    this.description = description;
    this.complete = complete;
    this.dateCreation = dateCreation;
    this.dateFinished = dateFinished;
  }

  //Methods
  public Long getId() {
    return this.id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public Folder getFolder() {
    return this.folder;
  }

  public void setFolder(Folder folder) {
    this.folder = folder;
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
