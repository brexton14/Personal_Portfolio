FROM eclipse-temurin:17-jdk

# Set working directory
WORKDIR /app

COPY . .

RUN ./mvnw clean package -DskipTests

EXPOSE 8080

# Run the JAR
CMD ["java", "-jar", "target/Portfolio-0.0.1-SNAPSHOT.jar"]
