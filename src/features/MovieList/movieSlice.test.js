import { createTwoLists } from "./movieSlice";
describe("testing movie slice", () => {
  it("should be able to create two movie lists that should render equal no. of items in the row", () => {
    const initialState = {
      movies: [
        {
          id: "1234",
          name: "Video1",
          length: "20min"
        },
        {
          id: "1235",
          name: "Video2",
          length: "22min"
        },
        {
          id: "1236",
          name: "Video3",
          length: "22min"
        },
        {
          id: "1237",
          name: "Video4",
          length: "22min"
        },
        {
          id: "1238",
          name: "Video5",
          length: "22min"
        },
        {
          id: "1239",
          name: "Video6",
          length: "22min"
        },
        {
          id: "1240",
          name: "Video7",
          length: "22min"
        },
        {
          id: "1241",
          name: "Video8",
          length: "22min"
        },
        {
          id: "1242",
          name: "Video9",
          length: "22min"
        },
        {
          id: "1243",
          name: "Video10",
          length: "22min"
        }
      ],
      movies1: [],
      movies2: []
    };

    const Action = {
      count: 4,
      windowSize: 1366
    };

    const finalState = {
      movies: [
        {
          id: "1234",
          name: "Video1",
          length: "20min"
        },
        {
          id: "1235",
          name: "Video2",
          length: "22min"
        },
        {
          id: "1236",
          name: "Video3",
          length: "22min"
        },
        {
          id: "1237",
          name: "Video4",
          length: "22min"
        },
        {
          id: "1238",
          name: "Video5",
          length: "22min"
        },
        {
          id: "1239",
          name: "Video6",
          length: "22min"
        },
        {
          id: "1240",
          name: "Video7",
          length: "22min"
        },
        {
          id: "1241",
          name: "Video8",
          length: "22min"
        },
        {
          id: "1242",
          name: "Video9",
          length: "22min"
        },
        {
          id: "1243",
          name: "Video10",
          length: "22min"
        }
      ],
      movies1: [
        {
          id: "1234",
          name: "Video1",
          length: "20min"
        },
        {
          id: "1235",
          name: "Video2",
          length: "22min"
        },
        {
          id: "1236",
          name: "Video3",
          length: "22min"
        },
        {
          id: "1237",
          name: "Video4",
          length: "22min"
        },
        {
          id: "1238",
          name: "Video5",
          length: "22min"
        }
      ],
      movies2: [
        {
          id: "1239",
          name: "Video6",
          length: "22min"
        },
        {
          id: "1240",
          name: "Video7",
          length: "22min"
        },
        {
          id: "1241",
          name: "Video8",
          length: "22min"
        },
        {
          id: "1242",
          name: "Video9",
          length: "22min"
        },
        {
          id: "1243",
          name: "Video10",
          length: "22min"
        }
      ]
    };
    const actualValue = createTwoLists(initialState, Action);

    expect(actualValue).toEqual({
      type: "movies/createTwoLists",
      payload: initialState
    });
  });
});
