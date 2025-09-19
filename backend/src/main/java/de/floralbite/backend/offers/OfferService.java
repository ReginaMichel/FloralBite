package de.floralbite.backend.offers;

import de.floralbite.backend.messages.IdService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    private final ColdOfferRepo coldOfferRepo;
    private final MenuOfferRepo menuOfferRepo;
    private final IdService idService;

    public OfferService(ColdOfferRepo coldOfferRepo, MenuOfferRepo menuOfferRepo, IdService idService) {
        this.coldOfferRepo = coldOfferRepo;
        this.menuOfferRepo = menuOfferRepo;
        this.idService = idService;
    }

    public ColdOffer addColdOffer(ColdOfferDTO offerDTO) {
        String id = idService.newId();
        ColdOffer offer = new ColdOffer(id, offerDTO.name(), offerDTO.category(), offerDTO.description());
        return coldOfferRepo.save(offer);
    }
    public MenuOffer addMenuOffer(MenuOfferDTO offerDTO) {
        String id = idService.newId();
        MenuOffer offer = new MenuOffer(id, offerDTO.name(), offerDTO.category(), offerDTO.content(), offerDTO.price());
        return menuOfferRepo.save(offer);
    }

    public List<ColdOffer> getAllColdOffers() {
        return coldOfferRepo.findAll();
    }
    public List<MenuOffer> getAllMenuOffers() {
        return menuOfferRepo.findAll();
    }
}
