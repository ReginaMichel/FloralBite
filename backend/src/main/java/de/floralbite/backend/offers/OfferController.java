package de.floralbite.backend.offers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/offers")
public class OfferController {

    private final OfferService offerService;

    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @PostMapping("/cold")
    public ResponseEntity<ColdOffer> addColdOffer (@RequestBody ColdOfferDTO coldOfferDto) {
        ColdOffer savedOffer = offerService.addColdOffer(coldOfferDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedOffer);
    }
    @PostMapping("/menu")
    public ResponseEntity<MenuOffer> addMenuOffer (@RequestBody MenuOfferDTO menuOfferDto) {
        MenuOffer savedOffer = offerService.addMenuOffer(menuOfferDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedOffer);
    }

    @GetMapping("/cold")
    public ResponseEntity<List<ColdOffer>> getAllColdOffers() {
        List<ColdOffer> allOffers = offerService.getAllColdOffers();
        if (allOffers.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(allOffers);
    }
    @GetMapping("/menu")
    public ResponseEntity<List<MenuOffer>> getAllMenuOffers() {
        List<MenuOffer> allOffers = offerService.getAllMenuOffers();
        if (allOffers.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.status(HttpStatus.OK).body(allOffers);
    }
}
