package com.example.productservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ProductRequest {
    private String name;
    private String description;
    private BigDecimal price;
    private List<String> pincodes;
}

//@GetMapping("/users/{userId}")
//    public ResponseEntity<UserResponseDto> GetUsers(@PathVariable("userId") int userId) {
//        UserEntity user = userService.getUser(userId);
//        UserResponseDto userResponseResult = new UserResponseDto();
//        userResponseResult.setTopics(user.getTopics());
//        userResponseResult.setUserId(user.getUserId());
//
//        return ResponseEntity.ok(userResponseResult);
//    }
//
//    @PostMapping("/users")
//    public ResponseEntity<UserEntity> setUser(UserEntity user) {
//        try {
//            userService.saveUser(user);
//            return ResponseEntity.ok(user);
//        }
//        catch (Exception e) {
//            return (ResponseEntity<UserEntity>) ResponseEntity.badRequest();
//        }
//    }
//
//    @PatchMapping("users/{userId}")
//    public ResponseEntity<UserEntity> updateUser(UserEntity user) {
//        try {
//            userService.updateInterest(user.getTopics());
//            return ResponseEntity.ok(user);
//        }
//        catch (Exception e) {
//            return (ResponseEntity<UserEntity>) ResponseEntity.badRequest();
//        }
//    }


//service ---------------------

//@Override
//    public UserEntity getUser(int userId) {
//        return userRepository.getOne(userId);
//    }
//
//    @Override
//    public UserEntity saveUser(UserEntity userEntity) {
//        return userRepository.saveAndFlush(userEntity);
//    }
//
//    @Override
//    public UserEntity updateInterest(List<String> interest) {
//        return null;
//    }
