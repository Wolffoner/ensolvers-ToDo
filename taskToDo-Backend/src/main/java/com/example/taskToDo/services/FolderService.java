package com.example.taskToDo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.naming.NameNotFoundException;

import com.example.taskToDo.models.Folder;
import com.example.taskToDo.models.User;
import com.example.taskToDo.repositories.FolderRepository;
import com.example.taskToDo.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.bytebuddy.implementation.bytecode.Throw;

@Service
public class FolderService {
  
  @Autowired
  UserRepository userRepository;
  @Autowired
  FolderRepository folderRepository;

  // get Folders
  public List<Folder> getFolders(){
    return (ArrayList<Folder>) folderRepository.findAll();
  }

  // save Folder
  public Folder saveFolder(Folder folder, Long userId){
    Optional<User> optUser = userRepository.findById(userId);
    if(optUser.isPresent()){
      User user = optUser.get();
      folder.setUser(user);
      return folderRepository.save(folder);
    }
    return null;
  }

  // get Folder by Id
  public Folder getFolderById(Long id){
    Optional<Folder> optFolder = folderRepository.findById(id);
    if(optFolder.isPresent()){
      return optFolder.get();
    }
    return null;
  }

  // delete Folder by Id
  public Folder deleteFolderById(Long id){
    Optional<Folder> optFolder = folderRepository.findById(id);
    if(optFolder.isPresent()){
      folderRepository.deleteById(id);
      return optFolder.get();
    }
    return null;
  }
  
  // modify Folder by Id
  public Folder modifyFolderById(Long id, Folder folder){
    Optional<Folder> folderOpt = folderRepository.findById(id);
    if(folderOpt.isPresent()){
      folderOpt.get().setTitle(folder.getTitle());
      folderOpt.get().setDescription(folder.getDescription());
      return folderOpt.get();
    } else {
      return null;
    }
  }

}
