package reservas.hotel;

import java.util.*;

import com.github.javafaker.Company;
import com.github.javafaker.Faker;
import lombok.extern.slf4j.Slf4j;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

public class LoadDatabase {

	private static int getRandomIntegerBetweenRange(int min, int max) {
		return (int) (Math.random() * ((max-min) + 1)) + min;
	}
	
	private boolean getRandomBoolean() {
		Random random = new Random();
		return random.nextBoolean();
	}
	
	@Bean
	CommandLineRunner initDatabase(HotelRepository hRepository, QuartoRepository qRepository, ClienteRepository cRepository) {
		
		return args -> {
			//lista de companhias areas
			
			List<String> hoteis_name = Arrays.asList(
					
					"Valle D'incanto Midscale Hotel",
		             "Hotel Estalagem St Hubertus. estalagemsthubertus",
		             "Hotel Ritta Höppner",
		             "Hotel Vila Inglesa",
		             "Nomaa Hotel",
		             "Hotel Deville Prime Campo Grande",
		             "Belmond Hotel das Cataratas",
		             "Santa Clara Eco Resort",
		             "Hotel Casa da Montanha",
		             "Hilton Barra Rio de Janeiro",
		             "Hotel Unique",
		             "Hotel Fasano São Paulo"
					
					
					
					);
			List<String> uf_list = Arrays.asList("AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RR", "RO", "RJ", "RN", "RS", "SC", "SP", "SE", "TO");
			
			Faker faker = new Faker(new Locale("pt"));
			
			int num_hotels = getRandomIntegerBetweenRange(4,10);
			
			List<String> sex_list = Arrays.asList("Homem", "Mulher", "Outro");
			
			int num_ufs = uf_list.size();
			
			for(int u=0; u < uf_list.size(); u++) {
				for(int i=0; i<num_hotels; i++) {
					int uf_index = u;
					
					int starts = getRandomIntegerBetweenRange(1,5);
					String uf = uf_list.get(uf_index);
					String name = faker.company().name();
					
					int num_bedrooms = gerRandomIntegerBetweenRange(1,20);
					
					Hotel hotel = new Hotel (name,uf,stars);
					hRepository.save(hotel);
					
					for(int j=1; j<= num_bedrooms; j++) {
						boolean occupied = getRandomBoolean();
						int num_beds = getRandomIntegerBetweenRange(1,4);
						int price = getRandomIntegerBetweenRange(10,50) * 10;
						
						if(occupied) {
							
							String guest_name = faker.name().fullName();
							int age = getRandomIntegerBetweenRange(20,70);
							int sex_index = getRandomIntegerBetweenRange(0,2);
							String sex = sex_list.get(sex_index);
							
							Quarto bedroom = new Quarto(true, price, num_beds, j);
							
							Cliente guest = new Cliente (gues_name, sex, age, bedroom);
							
							qRepository.save(bedroom);
							cRepository.save(guest);
						}
						else {
							qRepository.save(new Quarto(false, price, num_beds, j));
						}
					}
				}
			}
			
			
					
		};
	}
	
}
