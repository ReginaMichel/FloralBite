package de.floralbite.backend.offers;

import de.floralbite.backend.offers.models.*;
import de.floralbite.backend.offers.repos.ColdOfferRepo;
import de.floralbite.backend.offers.repos.MenuOfferRepo;
import de.floralbite.backend.offers.repos.SavoryOfferRepo;
import de.floralbite.backend.offers.repos.SweetOfferRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.ArrayList;

import static org.hamcrest.Matchers.*;

@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.AFTER_EACH_TEST_METHOD)
class OfferControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ColdOfferRepo coldOfferRepo;
    @Autowired
    private MenuOfferRepo menuOfferRepo;
    @Autowired
    private SavoryOfferRepo savoryOfferRepo;
    @Autowired
    private SweetOfferRepo sweetOfferRepo;

    @BeforeEach
    void setUp() {
        ColdOffer coldOffer1 = new ColdOffer("1","Kalte Speise 1", ColdOfferCategory.FINGERFOOD, "Eine kalte Speise");
        ColdOffer coldOffer2 = new ColdOffer("2", "Kalte Speise 2", ColdOfferCategory.SALAD, "Eine weitere kalte Speise");
        coldOfferRepo.save(coldOffer1);
        coldOfferRepo.save(coldOffer2);

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
        MenuOffer menuOffer = new MenuOffer("1", "Festliches Menü", starters, mainDishes, desserts, "Preis");
        menuOfferRepo.save(menuOffer);

        ArrayList<String> savoryDishes = new ArrayList<>();
        savoryDishes.add("Herzhafte Speise 1");
        savoryDishes.add("Herzhafte Speise 2");
        ArrayList<String> sweetDishes = new ArrayList<>();
        sweetDishes.add("Süßspeise 1");
        sweetDishes.add("Süßspeise 2");
        SavoryOffer savoryOffer = new SavoryOffer("1", "Salzig und süße Kombination", savoryDishes, sweetDishes, "Preis");
        savoryOfferRepo.save(savoryOffer);

        SweetOffer sweetOffer1 = new SweetOffer("1", "Süße Creme", SweetOfferCategory.DESSERT, "Eine Süßspeise");
        SweetOffer sweetOffer2 = new SweetOffer("2", "Kuchenschnitte", SweetOfferCategory.CAKE, "Eine weitere Süßspeise");
        SweetOffer sweetOffer3 = new SweetOffer("3", "Sahnetorte", SweetOfferCategory.CREAMCAKE, "Eine Sahnetorte");
        sweetOfferRepo.save(sweetOffer1);
        sweetOfferRepo.save(sweetOffer2);
        sweetOfferRepo.save(sweetOffer3);
    }

    @Test
    @WithMockUser(username = "admin", authorities = {"ADMIN"})
    void addColdOffer() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/offers/cold")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                  {
                      "name": "Kalte Platte",
                      "category": "FINGERFOOD",
                      "description": "Ein kaltes Gericht"
                  }
                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                          {
                                              "name": "Kalte Platte",
                                              "category": "FINGERFOOD",
                                              "description": "Ein kaltes Gericht"
                                          }
                        """
                ))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id")
                        .isNotEmpty());
    }
    @Test
    @WithMockUser(username = "admin", authorities = {"ADMIN"})
    void addMenuOffer() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/offers/menu")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                  {
                      "name": "Spätsommerabend am Mittelmeer",
                      "starters": [
                          "Mediterrane Gemüseplatte",
                          "Avocado-Caprese",
                          "Bruschetta Variationen",
                          "Sommersalat mit einer Himbeer-Vinaigrette"
                      ],
                      "mainDishes": [
                          "Auberginen-Linsen-Lasagne",
                          "Zitronenrisotto mit gebratenem grünen Spargel und Cashew-Parmesan",
                          "Weiße Bohnen Ratatouille-Pot"
                      ],
                      "desserts": [
                          "Erdbeer-Mascarvone-Cups",
                          "Feine Zitronencreme auf einer mediterranen Obstplatte",
                          "Heidelbeer Tiramisu"
                      ],
                      "price": "43€ p.P. ab 50 P."
                  }
                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                          {
                                              "name": "Spätsommerabend am Mittelmeer",
                                              "starters": [
                                                  "Mediterrane Gemüseplatte",
                                                  "Avocado-Caprese",
                                                  "Bruschetta Variationen",
                                                  "Sommersalat mit einer Himbeer-Vinaigrette"
                                              ],
                                              "mainDishes": [
                                                  "Auberginen-Linsen-Lasagne",
                                                  "Zitronenrisotto mit gebratenem grünen Spargel und Cashew-Parmesan",
                                                  "Weiße Bohnen Ratatouille-Pot"
                                              ],
                                              "desserts": [
                                                  "Erdbeer-Mascarvone-Cups",
                                                  "Feine Zitronencreme auf einer mediterranen Obstplatte",
                                                  "Heidelbeer Tiramisu"
                                              ],
                                              "price": "43€ p.P. ab 50 P."
                                          }
                        """
                ))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id")
                        .isNotEmpty());
    }
    @Test
    @WithMockUser(username = "admin", authorities = {"ADMIN"})
    void addSavoryOffer() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/offers/savory")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                  {
                      "name": "Klassiker neu interpretiert",
                      "savoryDishes": [
                          "Avocado-Caprese",
                          "Miniburger BBQ-Zwiebel mit Pommes",
                          "Nudelsalat Tomate-Olive-Rucola",
                          "Bruschetta Variationen",
                          "Sommersalat mit einer Himbeer-Vinaigrette"
                      ],
                      "sweetDishes": [
                          "Schwarzwälderkirsch-Cups",
                          "Zucker-Mandel-Schnitten",
                          "Erdbeer-Mascarvone-Cups",
                          "Exotische Obstplatte"
                      ],
                      "price": ""
                  }
                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                          {
                                               "name": "Klassiker neu interpretiert",
                                               "savoryDishes": [
                                                   "Avocado-Caprese",
                                                   "Miniburger BBQ-Zwiebel mit Pommes",
                                                   "Nudelsalat Tomate-Olive-Rucola",
                                                   "Bruschetta Variationen",
                                                   "Sommersalat mit einer Himbeer-Vinaigrette"
                                               ],
                                               "sweetDishes": [
                                                   "Schwarzwälderkirsch-Cups",
                                                   "Zucker-Mandel-Schnitten",
                                                   "Erdbeer-Mascarvone-Cups",
                                                   "Exotische Obstplatte"
                                               ],
                                               "price": ""
                                           }
                        """
                ))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id")
                        .isNotEmpty());
    }
    @Test
    @WithMockUser(username = "admin", authorities = {"ADMIN"})
    void addSweetOffer() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.post("/api/offers/sweet")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("""
                  {
                      "name":  "Schwarzwälderkirsch-Cups",
                      "category": "DESSERT",
                      "description":  "Schwarzwälderkirsch-Cups"
                  }
                """
                        ))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                                          {
                                              "name":  "Schwarzwälderkirsch-Cups",
                                              "category": "DESSERT",
                                              "description":  "Schwarzwälderkirsch-Cups"
                                          }
                        """
                ))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id")
                        .isNotEmpty());
    }

    @Test
    void getAllColdOffers() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/offers/cold"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith("application/json"))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(2)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[*].id", containsInAnyOrder("1", "2")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='1')].name", hasItem("Kalte Speise 1")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='2')].name", hasItem("Kalte Speise 2")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='1')].category", hasItem("FINGERFOOD")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='2')].category", hasItem("SALAD")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='1')].description", hasItem("Eine kalte Speise")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='2')].description", hasItem("Eine weitere kalte Speise")));
    }
    @Test
    void getAllMenuOffers() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/offers/menu"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith("application/json"))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", is("1")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", is("Festliches Menü")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].starters", containsInAnyOrder("Kalte Speise 1", "Kalte Speise 2")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].mainDishes", containsInAnyOrder("Hauptspeise 1", "Hauptspeise 2")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].desserts", containsInAnyOrder("Süße Creme", "Kuchenschnitte", "Sahnetorte")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].price", is("Preis")));
    }
    @Test
    void getAllSavoryOffers() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/offers/savory"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith("application/json"))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(1)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].id", is("1")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name", is("Salzig und süße Kombination")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].savoryDishes", containsInAnyOrder("Herzhafte Speise 1", "Herzhafte Speise 2")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].sweetDishes", containsInAnyOrder("Süßspeise 1", "Süßspeise 2")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].price", is("Preis")));
    }
    @Test
    void getAllSweetOffers() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/api/offers/sweet"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().contentTypeCompatibleWith("application/json"))
                .andExpect(MockMvcResultMatchers.jsonPath("$", hasSize(3)))
                .andExpect(MockMvcResultMatchers.jsonPath("$[*].id", containsInAnyOrder("1", "2", "3")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='1')].name", hasItem("Süße Creme")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='2')].name", hasItem("Kuchenschnitte")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='3')].name", hasItem("Sahnetorte")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='1')].category", hasItem("DESSERT")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='2')].category", hasItem("CAKE")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='3')].category", hasItem("CREAMCAKE")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='1')].description", hasItem("Eine Süßspeise")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='2')].description", hasItem("Eine weitere Süßspeise")))
                .andExpect(MockMvcResultMatchers.jsonPath("$[?(@.id=='3')].description", hasItem("Eine Sahnetorte")));
    }

    @Test
    void getAllColdOffers_returns204WhenEmpty() throws Exception {
        coldOfferRepo.deleteAll();
        mockMvc.perform(MockMvcRequestBuilders.get("/api/offers/cold"))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }
    @Test
    void getAllMenuOffers_returns204WhenEmpty() throws Exception {
        menuOfferRepo.deleteAll();
        mockMvc.perform(MockMvcRequestBuilders.get("/api/offers/menu"))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }
    @Test
    void getAllSavoryOffers_returns204WhenEmpty() throws Exception {
        savoryOfferRepo.deleteAll();
        mockMvc.perform(MockMvcRequestBuilders.get("/api/offers/savory"))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }
    @Test
    void getAllSweetOffers_returns204WhenEmpty() throws Exception {
        sweetOfferRepo.deleteAll();
        mockMvc.perform(MockMvcRequestBuilders.get("/api/offers/sweet"))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }
}