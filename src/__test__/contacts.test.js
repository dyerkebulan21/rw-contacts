import React from 'react'
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import {Contacts} from '../pages/Contacts'
import { rest } from 'msw'
import {setupServer} from 'msw/node'

const users = [{
        gender: "male",
        name: {
        title: "Mr",
        first: "Amr",
        last: "Bartholomeus",
        },
        location: {
        street: {
        number: 5118,
        name: "De Groeneweg",
        },
        city: "Eursinge gem de Wolden",
        state: "Friesland",
        country: "Netherlands",
        postcode: 60049,
        coordinates: {
        latitude: "40.2960",
        longitude: "-44.0300",
        },
        timezone: {
        offset: "+4:00",
        description: "Abu Dhabi, Muscat, Baku, Tbilisi",
        },
        },
        email: "amr.bartholomeus@example.com",
        login: {
        uuid: "00a85338-ac89-40ab-82f1-dd86fbf544bf",
        username: "whitebird846",
        password: "billyboy",
        salt: "NVIKaORr",
        md5: "b657212e0c9a668239425c5d8dbcbe22",
        sha1: "ec993639640aaaa6a6ca286747a7fd61f1b497d8",
        sha256: "4145d9c8f82a9939f30d834d7ab9ca79e34750e321640d87c63209466ffaae91",
        },
        dob: {
        date: "1989-03-06T23:03:03.295Z",
        age: 32,
        },
        registered: {
        date: "2011-02-24T06:10:55.716Z",
        age: 10,
        },
        phone: "(969)-322-7971",
        cell: "(264)-469-6384",
        id: {
        name: "BSN",
        value: "76837485",
        },
        picture: {
        large: "https://randomuser.me/api/portraits/men/37.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/37.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/37.jpg",
        },
        nat: "NL",
        },
        {
        gender: "male",
        name: {
        title: "Mr",
        first: "Enrique",
        last: "Martinez",
        },
        location: {
        street: {
        number: 1096,
        name: "Calle del Arenal",
        },
        city: "Orense",
        state: "Extremadura",
        country: "Spain",
        postcode: 61614,
        coordinates: {
        latitude: "40.1566",
        longitude: "-126.5924",
        },
        timezone: {
        offset: "+3:00",
        description: "Baghdad, Riyadh, Moscow, St. Petersburg",
        },
        },
        email: "enrique.martinez@example.com",
        login: {
        uuid: "3a77aea5-d7ba-4d5c-bd86-74881b999cfa",
        username: "lazysnake812",
        password: "tekken",
        salt: "X9O0VUHo",
        md5: "5d2cc1313a7194ab257948ea097f53e2",
        sha1: "e55da20a00424f4b7f288a9047543da2680f10c3",
        sha256: "bec9168a2ed9b24c378637c1f41e6cc4ba75a7c7d47b99c8562fdd5835cf1599",
        },
        dob: {
        date: "1990-04-27T10:33:16.761Z",
        age: 31,
        },
        registered: {
        date: "2011-07-24T03:50:43.146Z",
        age: 10,
        },
        phone: "951-965-727",
        cell: "666-539-134",
        id: {
        name: "DNI",
        value: "93921236-N",
        },
        picture: {
        large: "https://randomuser.me/api/portraits/men/6.jpg",
        medium: "https://randomuser.me/api/portraits/med/men/6.jpg",
        thumbnail: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
        },
        nat: "ES",
}]

const handlers = [
    rest.get("https://randomuser.me/api/?results=10", (req, res,ctx) => {
        
        return res(
            ctx.status(200),
            ctx.json({
                results: users,
            })
        )
    })
]

const server = setupServer(...handlers)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close()) 
test(`contacts get data success`, async() => {
    render(<Contacts/>);
    const loader = screen.getByTestId("contacts-loader")
    expect(loader).toBeInTheDocument()
    await waitForElementToBeRemoved(loader)
    expect(loader).not.toBeInTheDocument()
    expect(screen.getByTestId("contacts-table-container")).toBeInTheDocument()
})