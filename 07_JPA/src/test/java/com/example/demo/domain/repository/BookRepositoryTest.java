package com.example.demo.domain.repository;

import com.example.demo.domain.entity.Book;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class BookRepositoryTest {

    @Autowired
    private BookRepository bookRepository;
    //기본 CRUD TEST
    @Test
    public void t1() throws Exception{
//        //INSERT
//        Book book =
//                Book.builder()
//                        .bookCode(1111L)
//                        .bookName("이것이리눅스다")
//                        .publisher("한빛미디어")
//                        .isbn("1111-1111")
//                        .build();
//
//        //bookRepository.save(book);

//        //UPDATE
//        book.setBookName("JAVA의 정석");
//        book.setPublisher("이지퍼블리싱");
//        book.setIsbn("1111-22-3333");
//        bookRepository.save(book);

//        //DELETE
        bookRepository.deleteById(1111L);


    }

}