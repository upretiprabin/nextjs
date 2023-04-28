import React, {useEffect, useState} from "react";
import Select from "react-select";
import HeaderLink from "../../components/Header/HeaderLink";
import {ClientDetails} from "../ClientDetails";
import Pagination from "../Pagination";
import {CgSearch} from "react-icons/cg";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {deleteClient, getClients} from "./actions";
import {getCookie} from "cookies-next";
import {successClients} from "./reducer";
import Loader from "../../components/LoadingIndicator/Loader";

const MyClients = () => {

  const selector = useSelector(state => state.clients);
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {
    getClients(dispatch, router.query.investigatorId);
  }, []);


  const [state, setState] = useState({
    currentClients: [],
    currentPage: null,
    totalPages: null,
    selectedOption: null,
    loading: true
  })

  const handleChangeSortBy = (selectedOption) => {
    setState((state) => ({...state, selectedOption}));
    let clients = [...selector.clients];
    selectedOption ? clients.sort(SortByName) : window.location.reload();

    function SortByName(x, y) {
      const companyX = x.companyName ? x.companyName : '';
      const companyY = y.companyName ? y.companyName : '';
      return ((companyX === companyY) ? 0 :
        ((companyX.toLowerCase() > companyY.toLowerCase()) ? 1 : -1));
    }

    const selection = selectedOption ? selectedOption.value : "";
    const offset = (state.currentPage - 1) * 5;
    if (selection === "Asc") {
      const currentClients = clients.slice(offset, offset + 5);
      setState((state) => ({...state, currentClients}));
    }
    if (selection === "Desc") {
      const currentClients = clients.reverse().slice(offset, offset + 5);
      setState((state) => ({...state, currentClients: currentClients}));
    }
    dispatch(successClients({clients: clients}));
  };

  const onPageChanged = data => {
    const {currentPage, totalPages, pageLimit} = data;

    const offset = (currentPage - 1) * pageLimit;
    const currentClients = selector.clients.slice(offset, offset + pageLimit);

    setState((state) => ({...state, currentPage, currentClients, totalPages}));
  };

  const onDeleteRequest = (clientId) => {
    swal({
      title: "Are you sure?",
      text: "It will delete clients and cases too.",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(async (willDelete) => {
      if (willDelete) {
        console.log("deleting", clientId);
        await deleteClient(dispatch, clientId, selector.clients);
        window.location.reload();
        swal("Successfully Deleted", {
          icon: "success"
        });
      } else {
        swal("Delete is cancelled!");
      }
    });
  }

  const investigatorId = getCookie("uuid");
  const {currentClients, selectedOption} = state;
  const options = [
    {value: "Asc", label: "SORT: A to Z"},
    {value: "Desc", label: "SORT: Z to A"}
  ];

  return (
    <article>
      <section className="dashboard-section myClientsPage">
        <div className="grid-x grid-margin-x medium-margin-collapse">
          <div className="cell auto">
            <section className="text-editor-section hidden-phone">
              <div className="gray-strip columns align-self-middle">
                <div className="grid-x align-middle height-100">
                  <div className="small-12 medium-5 large-4 cell">
                    <div className="gray-strip-title text-left">
                      MY CLIENTS
                    </div>
                  </div>
                  <div className="small-12 medium-4 large-2 cell padding-right-10">
                    <Select isClearable={true} isSearchable={false}
                            value={selectedOption} onChange={handleChangeSortBy}
                            options={options}
                    />
                  </div>
                  <div className="small-12 medium-3 large-6 cell">
                    <div className="grid-x flex-end" style={{alignItems: 'center'}}>
                      <HeaderLink href={`/createnewclient/${investigatorId}/`}>
                        <div className="add-title">ADD NEW CLIENT</div>
                      </HeaderLink>
                      <HeaderLink href={`/createnewclient/${investigatorId}/`}>
                        <div className="add-rounded-button">+</div>
                      </HeaderLink>
                    </div>
                  </div>
                </div>
              </div>

            </section>
            <section className="mobile-filter">
              <div className="search-bar">
                <CgSearch/>
                <input placeholder="Search anything"/>
              </div>
              <HeaderLink href={`/createnewclient/${investigatorId}/`}>
                <button>+ New Client</button>
              </HeaderLink>
            </section>
            {selector.loading && <Loader/>}
            {
              !selector.loading &&
              <div className="table-section my-client-list">
                <div className="row-strip border-bottom">
                  <div className="grid-x grid-margin-x">
                    <div className="small-2 medium-2 large-2 cell">
                      <div className="table-heading">Client Name</div>
                    </div>
                    <div className="small-8 medium-8 large-8 cell">
                      <div className="table-heading">Point of Contact</div>
                    </div>

                  </div>
                </div>
                <div className="row-strip border-bottom">
                  {
                    !selector.loading && currentClients ?
                      currentClients?.map(item => (
                        <ClientDetails key={item.uuid} item={item} match={router.asPath}
                                       onDeleteRequest={() => onDeleteRequest(item.uuid)}/>
                      ))
                      : ""
                  }
                </div>

              </div>}
            {/*{selector.loading && <Loader/>}*/}
            {
              !selector.loading &&
              <div className="grid-x grid-margin-x medium-margin-collapse">
                <div className="small-12 medium-12 large-12 cell">
                  {selector.clients?.length > 0 ?
                    <Pagination totalRecords={selector.clients?.length} pageLimit={5} pageNeighbours={1}
                                onPageChanged={onPageChanged}/>
                    : "No Clients"}
                </div>
              </div>}
          </div>
        </div>
      </section>
    </article>
  );
}

export default MyClients
