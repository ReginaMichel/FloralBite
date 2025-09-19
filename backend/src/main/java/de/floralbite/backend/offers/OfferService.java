package de.floralbite.backend.offers;

import de.floralbite.backend.messages.IdService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    private final SingleOfferRepo singleOfferRepo;
    private final MenuOfferRepo menuOfferRepo;
    private final IdService idService;

    public OfferService(SingleOfferRepo singleOfferRepo, MenuOfferRepo menuOfferRepo, IdService idService) {
        this.singleOfferRepo = singleOfferRepo;
        this.menuOfferRepo = menuOfferRepo;
        this.idService = idService;
    }

    public SingleOffer addSingleOffer(SingleOfferDTO offerDTO) {
        String id = idService.newId();
        SingleOffer offer = new SingleOffer(id, offerDTO.name(), offerDTO.category(), offerDTO.description());
        return singleOfferRepo.save(offer);
    }
    public MenuOffer addMenuOffer(MenuOfferDTO offerDTO) {
        String id = idService.newId();
        MenuOffer offer = new MenuOffer(id, offerDTO.name(), offerDTO.category(), offerDTO.content(), offerDTO.price());
        return menuOfferRepo.save(offer);
    }

    public List<SingleOffer> getAllSingleOffers() {
        return singleOfferRepo.findAll();
    }
    public List<MenuOffer> getAllMenuOffers() {
        return menuOfferRepo.findAll();
    }
}
