package com.example.inventoryservice.service;

import com.example.inventoryservice.dto.InventoryResponse;
import com.example.inventoryservice.model.Inventory;
import com.example.inventoryservice.repository.InventoryRepository;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class InventoryService {
    private final InventoryRepository inventoryRepository;

    @Transactional(readOnly = true)
    public Boolean checkInInventory(String skuCode) {
        return inventoryRepository.findBySkuCode(skuCode).isPresent();
    }

    @Transactional(readOnly = true)
    public List<InventoryResponse> CheckListInInventory(List<String> skuCodes) {
        return inventoryRepository.findListBySkuCodes(skuCodes)
                .stream()
                .map(inventory -> mapToResponse(inventory))
                .collect(Collectors.toList());
    }

    public InventoryResponse mapToResponse(Inventory inventory) {
//    public List<InventoryResponse> mapToResponse(List<Inventory> inventories) {
//        List<InventoryResponse> responseList = new ArrayList<>();
//        for (Inventory inventory:
//             inventories) {
        InventoryResponse inventoryResponse = new InventoryResponse();
        inventoryResponse.setSkuCode(inventory.getSkuCode());
        inventoryResponse.setIsInStock(inventory.getQuantity() > 0);

//            responseList.add(inventoryResponse);

        return inventoryResponse;
    }

//        return responseList;
//    }
}
