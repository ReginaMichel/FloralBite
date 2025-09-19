package de.floralbite.backend.offers;

import de.floralbite.backend.messages.IdService;
import org.springframework.stereotype.Service;

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
}
