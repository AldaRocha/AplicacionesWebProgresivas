import React, { useState, useEffect, useCallback } from "react";

const SearchIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const ChevronLeftIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
const ChevronRightIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;
const Loader2Icon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>;
const ZapIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>;
const HeartIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const SkullIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 16.2c.6.3 1.2.6 2 .6s1.4-.3 2-.6M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2z"/><path d="M10 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/><path d="M14 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/><path d="M8 15s1 2 4 2 4-2 4-2"/></svg>;
const HelpCircleIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>;

function App() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({ next: null, prev: null, pages: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentUrl, setCurrentUrl] = useState('https://rickandmortyapi.com/api/character');
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusDisplay = (status) => {
    switch (status) {
      case 'Alive':
        return { icon: HeartIcon, color: '#10B981', label: 'Vivo' };
      case 'Dead':
        return { icon: SkullIcon, color: '#EF4444', label: 'Muerto' };
      case 'unknown':
      default:
        return { icon: HelpCircleIcon, color: '#6B7280', label: 'Desconocido' };
    }
  };

  const fetchCharacters = useCallback(async (url, isSearch = false, newSearchTerm = '') => {
    setLoading(true);
    setError('');

    let apiUrl = url;
    if (isSearch) {
      apiUrl = `https://rickandmortyapi.com/api/character/?name=${ newSearchTerm }`;
    }

    try {
      const response = await fetch(apiUrl);
      if (response.status === 404) {
        setCharacters([]);
        setInfo({ next: null, prev: null, pages: 1 });
        if (!isSearch) {
          setError('No se encontraron más personajes.');
        } else {
          setError(`No se encontraron resultados para "${newSearchTerm}".`);
        }
        return;
      }
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
      const data = await response.json();
      setCharacters(data.results);
      setInfo(data.info);
      setCurrentUrl(apiUrl);

      if (isSearch || !apiUrl.includes('page=')) {
        setCurrentPage(1);
      } else {
        const pageMatch = apiUrl.match(/page=(\d+)/);
        if (pageMatch) {
          setCurrentPage(parseInt(pageMatch[1], 10));
        }
      }
    } catch (err) {
      console.error('Error al obtener datos:', err);
      setError(`Ocurrió un error: ${err.message}. Inténtalo de nuevo más tarde.`);
      setCharacters([]);
      setInfo({ next: null, prev: null, pages: 1 });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (currentUrl === 'https://rickandmortyapi.com/api/character') {
      fetchCharacters(currentUrl);
    }
  }, [fetchCharacters]);

  const handleSearchChange = (e) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
    
    if (newSearchTerm.trim() === '') {
      setCurrentPage(1);
      setCurrentUrl('https://rickandmortyapi.com/api/character');
      fetchCharacters('https://rickandmortyapi.com/api/character', false);
    } else {
      fetchCharacters(null, true, newSearchTerm);
    }
  };

  const handlePageChange = (url) => {
    if (url) {
      fetchCharacters(url);
    }
  };

  const CharacterCard = ({ character }) => {
    const { icon: StatusIcon, color: statusColor, label: statusLabel } = getStatusDisplay(character.status);

    return (
      <div className="char-card">
        <div className="char-image-container">
          <img
            src={ character.image }
            alt={ character.name }
            className="char-image"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/3c3e44/ffffff?text=Imagen+No+Disp.'; }}
          />
          <span className="char-status-badge" style={{ '--status-color': statusColor }}>
            <StatusIcon size={ 12 } style={{ color: statusColor }} />
            { statusLabel }
          </span>
        </div>
        <div className="char-info-body">
          <h2 className="char-name" title={ character.name }>
            { character.name }
          </h2>
          <div className="char-details">
            <p className="char-detail-item">
              <ZapIcon size={ 16 } className="char-icon" />
              <span className="detail-label">
                Especie:
              </span> { character.species}
            </p>
            <p className="char-detail-item">
              <span className="detail-label">
                Género:
              </span> { character.gender === 'unknown' ? 'Desconocido' : character.gender }
            </p>
            <p className="char-detail-item">
              <span className="detail-label">
                Origen:
              </span> { character.origin.name }
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="app-container">
        <header className="app-header">
          <h1 className="header-title">
            Explorador de Rick y Morty
          </h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar personaje por nombre..."
              value={ searchTerm }
              onChange={ handleSearchChange }
              className="search-input"
              disabled={ loading }
            />
            <SearchIcon size={ 20 } className="search-icon" />
          </div>
        </header>
        <main className="results-main">
          {
            loading && (
              <div className="loading-state">
                <Loader2Icon size={40} className="animate-spin" />
                <p style={{ marginLeft: '0.75rem', fontSize: '1.125rem' }}>
                  Cargando personajes...
                </p>
              </div>
            )
          }
          {
            error && (
              <div className="error-message">
                <p className="font-semibold">
                  { error }
                </p>
              </div>
            )
          }
          {
            !loading && characters.length > 0 && (
              <>
                <div className="character-grid">
                  {
                    characters.map((char) => (
                      <CharacterCard key={ char.id } character={ char } />
                    ))
                  }
                </div>
                <div className="pagination-controls">
                  <button
                    onClick={() => handlePageChange(info.prev)}
                    disabled={!info.prev || loading}
                    className={`page-button ${!info.prev || loading ? '' : 'page-button-active'}`}
                  >
                    <ChevronLeftIcon size={ 20 } style={{ marginRight: '0.5rem' }} />
                    Anterior
                  </button>
                  <span className="page-index">
                    Página: { currentPage } / { info.pages }
                  </span>
                  <button
                    onClick={() => handlePageChange(info.next)}
                    disabled={!info.next || loading}
                    className={`page-button ${!info.next || loading ? '' : 'page-button-active'}`}
                  >
                    Siguiente
                    <ChevronRightIcon size={ 20 } style={{ marginLeft: '0.5rem' }} />
                  </button>
                </div>
              </>
            )
          }
          {
            !loading && characters.length === 0 && !error && (
              <div className="text-center" style={{ color: '#9CA3AF', fontSize: '1.25rem', paddingTop: '5rem' }}>
                <ZapIcon size={ 40 } style={{ margin: '0 auto 1rem', color: '#06B6D4' }} />
                <p>
                  ¡El universo está vacío! Parece que no hay personajes aquí.
                </p>
              </div>
            )
          }
        </main>
      </div>
    </>
  )
}

export default App
