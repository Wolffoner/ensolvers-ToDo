package com.example.taskToDo.controllers;

import java.util.List;

import com.example.taskToDo.models.Folder;
import com.example.taskToDo.services.FolderService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/folders")
public class FolderController {

  @Autowired
  FolderService folderService;
  

  @GetMapping
  public List<Folder> getFolders(){
    return folderService.getFolders();
  }

  @GetMapping("/id={id}")
  public Folder getFolderById(@PathVariable(name = "id") Long id){
    return folderService.getFolderById(id);
  }

  @GetMapping("/user_id={user_id}")
  public List<Folder> getFolderByUser(@PathVariable(name = "user_id") Long userId){
    return folderService.getFolderByUser(userId);
  }

  @PostMapping("/user_id={user_id}")
  public Folder postFolder(@RequestBody Folder folder, @PathVariable(name = "user_id") Long id ){
    return folderService.saveFolder(folder, id);
  }

  @DeleteMapping("/id={id}")
  public Folder deleteFolder(@PathVariable(name = "id") Long id){
    return folderService.deleteFolderById(id);
  }

  @PutMapping("/id={id}")
  public Folder modifyUser(@PathVariable(name="id") Long id, @RequestBody Folder folder){
    return folderService.modifyFolderById(id, folder);
  }
}
