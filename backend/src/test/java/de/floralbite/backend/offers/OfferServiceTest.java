package de.floralbite.backend.offers;

import de.floralbite.backend.messages.IdService;
import de.floralbite.backend.offers.models.*;
import de.floralbite.backend.offers.repos.ColdOfferRepo;
import de.floralbite.backend.offers.repos.MenuOfferRepo;
import de.floralbite.backend.offers.repos.SavoryOfferRepo;
import de.floralbite.backend.offers.repos.SweetOfferRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class OfferServiceTest {

    private ColdOfferRepo coldOfferRepo;
    private MenuOfferRepo menuOfferRepo;
    private SavoryOfferRepo savoryOfferRepo;
    private SweetOfferRepo sweetOfferRepo;
    private IdService idService;
    private OfferService offerService;
    private ColdOffer coldOffer1;
    private ColdOffer coldOffer2;
    private ColdOfferDTO coldOfferDTO;
    private MenuOffer menuOffer;
    private MenuOfferDTO menuOfferDTO;
    private SavoryOffer savoryOffer;
    private SavoryOfferDTO savoryOfferDTO;
    private SweetOffer sweetOffer1;
    private SweetOffer sweetOffer2;
    private SweetOffer sweetOffer3;
    private SweetOfferDTO sweetOfferDTO;

    @BeforeEach
    void setUp() {
        this.coldOfferRepo = mock(ColdOfferRepo.class);
        this.menuOfferRepo = mock(MenuOfferRepo.class);
        this.savoryOfferRepo = mock(SavoryOfferRepo.class);
        this.sweetOfferRepo = mock(SweetOfferRepo.class);
        this.idService = mock(IdService.class);
        this.offerService = new OfferService(coldOfferRepo, menuOfferRepo, savoryOfferRepo, sweetOfferRepo, idService);

        coldOffer1 = new ColdOffer("1","Kalte Speise 1", ColdOfferCategory.FINGERFOOD, "Eine kalte Speise");
        coldOffer2 = new ColdOffer("2", "Kalte Speise 2", ColdOfferCategory.SALAD, "Eine weitere kalte Speise");
        coldOfferDTO = new ColdOfferDTO("Kalte Speise 1", ColdOfferCategory.FINGERFOOD, "Eine kalte Speise");

        ArrayList<String> starters = new ArrayList<>();
        starters.add("Kalte Speise 1");
        starters.add("Kalte Speise 2");
        ArrayList<String> mainDishes = new ArrayList<>();
        mainDishes.add("Hauptspeise 1");
        mainDishes.add("Hauptspeise 2");
        ArrayList<String> desserts = new ArrayList<>();
        desserts.add("Süße Creme");
        desserts.add("Kuchenschnitte");
        desserts.add("Sahnetorte");
        menuOffer = new MenuOffer("1", "Festliches Menü", starters, mainDishes, desserts, "Preis");
        menuOfferDTO = new MenuOfferDTO("Festliches Menü", starters, mainDishes, desserts, "Preis");

        ArrayList<String> savoryDishes = new ArrayList<>();
        savoryDishes.add("Herzhafte Speise 1");
        savoryDishes.add("Herzhafte Speise 2");
        ArrayList<String> sweetDishes = new ArrayList<>();
        sweetDishes.add("Süßspeise 1");
        sweetDishes.add("Süßspeise 2");
        savoryOffer = new SavoryOffer("1", "Salzig und süße Kombination", savoryDishes, sweetDishes, "Preis");
        savoryOfferDTO = new SavoryOfferDTO("Salzig und süße Kombination", savoryDishes, sweetDishes, "Preis");

        sweetOffer1 = new SweetOffer("1", "Süße Creme", SweetOfferCategory.DESSERT, "Eine Süßspeise");
        sweetOffer2 = new SweetOffer("2", "Kuchenschnitte", SweetOfferCategory.CAKE, "Eine weitere Süßspeise");
        sweetOffer3 = new SweetOffer("3", "Sahnetorte", SweetOfferCategory.CREAMCAKE, "Eine Sahnetorte");
        sweetOfferDTO = new SweetOfferDTO("Süße Creme", SweetOfferCategory.DESSERT, "Eine Süßspeise");
    }

    @Test
    void addColdOffer_returnsColdOffer() {
        // GIVEN
        when(idService.newId()).thenReturn("1");
        when(coldOfferRepo.save(any(ColdOffer.class))).thenReturn(coldOffer1);
        // WHEN
        ColdOffer result = offerService.addColdOffer(coldOfferDTO);
        // THEN
        assertEquals(coldOffer1, result);
        verify(idService, times(1)).newId();
        verify(coldOfferRepo, times(1)).save(coldOffer1);
        verifyNoMoreInteractions(coldOfferRepo);
        verifyNoMoreInteractions(idService);
        verifyNoInteractions(menuOfferRepo);
        verifyNoInteractions(savoryOfferRepo);
        verifyNoInteractions(sweetOfferRepo);
    }
    @Test
    void addMenuOffer_returnsMenuOffer() {
        // GIVEN
        when(idService.newId()).thenReturn("1");
        when(menuOfferRepo.save(any(MenuOffer.class))).thenReturn(menuOffer);
        // WHEN
        MenuOffer result = offerService.addMenuOffer(menuOfferDTO);
        // THEN
        assertEquals(menuOffer, result);
        verify(idService, times(1)).newId();
        verify(menuOfferRepo, times(1)).save(menuOffer);
        verifyNoMoreInteractions(menuOfferRepo);
        verifyNoMoreInteractions(idService);
        verifyNoInteractions(coldOfferRepo);
        verifyNoInteractions(savoryOfferRepo);
        verifyNoInteractions(sweetOfferRepo);
    }
    @Test
    void addSavoryOffer_returnsSavoryOffer() {
        // GIVEN
        when(idService.newId()).thenReturn("1");
        when(savoryOfferRepo.save(any(SavoryOffer.class))).thenReturn(savoryOffer);
        // WHEN
        SavoryOffer result = offerService.addSavoryOffer(savoryOfferDTO);
        // THEN
        assertEquals(savoryOffer, result);
        verify(idService, times(1)).newId();
        verify(savoryOfferRepo, times(1)).save(savoryOffer);
        verifyNoMoreInteractions(savoryOfferRepo);
        verifyNoMoreInteractions(idService);
        verifyNoInteractions(coldOfferRepo);
        verifyNoInteractions(menuOfferRepo);
        verifyNoInteractions(sweetOfferRepo);
    }
    @Test
    void addSweetOffer_returnsSweetOffer() {
        // GIVEN
        when(idService.newId()).thenReturn("1");
        when(sweetOfferRepo.save(any(SweetOffer.class))).thenReturn(sweetOffer1);
        // WHEN
        SweetOffer result = offerService.addSweetOffer(sweetOfferDTO);
        // THEN
        assertEquals(sweetOffer1, result);
        verify(idService, times(1)).newId();
        verify(sweetOfferRepo, times(1)).save(sweetOffer1);
        verifyNoMoreInteractions(sweetOfferRepo);
        verifyNoMoreInteractions(idService);
        verifyNoInteractions(coldOfferRepo);
        verifyNoInteractions(menuOfferRepo);
        verifyNoInteractions(savoryOfferRepo);
    }

    @Test
    void getAllColdOffers() {
    }

    @Test
    void getAllMenuOffers() {
    }

    @Test
    void getAllSavoryOffers() {
    }

    @Test
    void getAllSweetOffers() {
    }
}