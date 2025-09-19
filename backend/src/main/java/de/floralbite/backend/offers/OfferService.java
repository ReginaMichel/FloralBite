package de.floralbite.backend.offers;

import de.floralbite.backend.messages.IdService;
import de.floralbite.backend.offers.models.*;
import de.floralbite.backend.offers.repos.ColdOfferRepo;
import de.floralbite.backend.offers.repos.MenuOfferRepo;
import de.floralbite.backend.offers.repos.SavoryOfferRepo;
import de.floralbite.backend.offers.repos.SweetOfferRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    private final ColdOfferRepo coldOfferRepo;
    private final MenuOfferRepo menuOfferRepo;
    private final SavoryOfferRepo savoryOfferRepo;
    private final SweetOfferRepo sweetOfferRepo;
    private final IdService idService;

    public OfferService(ColdOfferRepo coldOfferRepo, MenuOfferRepo menuOfferRepo, SavoryOfferRepo savoryOfferRepo,
                        SweetOfferRepo sweetOfferRepo, IdService idService) {
        this.coldOfferRepo = coldOfferRepo;
        this.menuOfferRepo = menuOfferRepo;
        this.savoryOfferRepo = savoryOfferRepo;
        this.sweetOfferRepo = sweetOfferRepo;
        this.idService = idService;
    }

    public ColdOffer addColdOffer(ColdOfferDTO offerDTO) {
        String id = idService.newId();
        ColdOffer offer = new ColdOffer(id, offerDTO.name(), offerDTO.category(), offerDTO.description());
        return coldOfferRepo.save(offer);
    }
    public MenuOffer addMenuOffer(MenuOfferDTO offerDTO) {
        String id = idService.newId();
        MenuOffer offer = new MenuOffer(id, offerDTO.name(), offerDTO.starters(), offerDTO.mainDishes(), offerDTO.desserts(), offerDTO.price());
        return menuOfferRepo.save(offer);
    }
    public SavoryOffer addSavoryOffer(SavoryOfferDTO offerDTO) {
        String id = idService.newId();
        SavoryOffer offer = new SavoryOffer(id, offerDTO.name(), offerDTO.savoryDishes(), offerDTO.sweetDishes(), offerDTO.price());
        return savoryOfferRepo.save(offer);
    }
    public SweetOffer addSweetOffer(SweetOfferDTO offerDTO) {
        String id = idService.newId();
        SweetOffer offer = new SweetOffer(id, offerDTO.name(), offerDTO.category(), offerDTO.description());
        return sweetOfferRepo.save(offer);
    }

    public List<ColdOffer> getAllColdOffers() {
        return coldOfferRepo.findAll();
    }
    public List<MenuOffer> getAllMenuOffers() {
        return menuOfferRepo.findAll();
    }
    public List<SavoryOffer> getAllSavoryOffers() {
        return savoryOfferRepo.findAll();
    }
    public List<SweetOffer> getAllSweetOffers() {
        return sweetOfferRepo.findAll();
    }
}
