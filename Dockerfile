FROM openjdk:21
EXPOSE 8080
ADD backend/target/FloralBite.jar FloralBite.jar
ENTRYPOINT ["java", "-jar", "FloralBite.jar"]
MAINTAINER regina_michel@outlook.de