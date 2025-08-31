import { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Screen } from '../App';

interface FilterScreenProps {
  navigateToScreen: (screen: Screen) => void;
}

const categories = [
  'Cultural', 'Música', 'Gastronomia', 'Folclore', 'Arte', 'Esporte', 'Religioso', 'Natureza'
];

const regions = [
  'Norte', 'Nordeste', 'Centro-Oeste', 'Sudeste', 'Sul'
];

const periods = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

export default function FilterScreen({ navigateToScreen }: FilterScreenProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedPeriods, setSelectedPeriods] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleRegion = (region: string) => {
    setSelectedRegions(prev =>
      prev.includes(region)
        ? prev.filter(r => r !== region)
        : [...prev, region]
    );
  };

  const togglePeriod = (period: string) => {
    setSelectedPeriods(prev =>
      prev.includes(period)
        ? prev.filter(p => p !== period)
        : [...prev, period]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setSelectedRegions([]);
    setSelectedPeriods([]);
  };

  const applyFilters = () => {
    // In a real app, this would apply the filters and navigate back
    navigateToScreen('home');
  };

  const totalFilters = selectedCategories.length + selectedRegions.length + selectedPeriods.length;

  return (
    <div className="h-full w-full bg-[#F5F5F5] flex flex-col">
      {/* Header */}
      <div className="bg-white px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <button
            onClick={() => navigateToScreen('home')}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft size={20} color="#333" />
          </button>
          
          <h1 className="text-lg" style={{ color: '#00A859' }}>
            Filtros
          </h1>
          
          {totalFilters > 0 && (
            <button
              onClick={clearAllFilters}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <X size={20} color="#666" />
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4 py-4 overflow-y-auto">
        {/* Active filters summary */}
        {totalFilters > 0 && (
          <Card className="p-4 mb-4 bg-white rounded-xl shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">
                {totalFilters} filtro{totalFilters !== 1 ? 's' : ''} ativo{totalFilters !== 1 ? 's' : ''}
              </span>
              <button
                onClick={clearAllFilters}
                className="text-sm"
                style={{ color: '#00A859' }}
              >
                Limpar tudo
              </button>
            </div>
          </Card>
        )}

        {/* Categories */}
        <Card className="p-4 mb-4 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg mb-3" style={{ color: '#00A859' }}>
            Categorias
          </h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isSelected = selectedCategories.includes(category);
              return (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    isSelected
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: isSelected ? '#00A859' : undefined
                  }}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Card>

        {/* Regions */}
        <Card className="p-4 mb-4 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg mb-3" style={{ color: '#00A859' }}>
            Regiões
          </h3>
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => {
              const isSelected = selectedRegions.includes(region);
              return (
                <button
                  key={region}
                  onClick={() => toggleRegion(region)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    isSelected
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: isSelected ? '#00A859' : undefined
                  }}
                >
                  {region}
                </button>
              );
            })}
          </div>
        </Card>

        {/* Periods */}
        <Card className="p-4 mb-6 bg-white rounded-xl shadow-sm">
          <h3 className="text-lg mb-3" style={{ color: '#00A859' }}>
            Período
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {periods.map((period) => {
              const isSelected = selectedPeriods.includes(period);
              return (
                <button
                  key={period}
                  onClick={() => togglePeriod(period)}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    isSelected
                      ? 'text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: isSelected ? '#00A859' : undefined
                  }}
                >
                  {period}
                </button>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Bottom Actions */}
      <div className="p-4 bg-white border-t border-gray-200">
        <div className="space-y-3">
          <Button
            onClick={applyFilters}
            className="w-full h-12 rounded-lg text-white"
            style={{ backgroundColor: '#00A859' }}
          >
            Aplicar Filtros ({totalFilters})
          </Button>
          
          {totalFilters > 0 && (
            <Button
              onClick={clearAllFilters}
              variant="outline"
              className="w-full h-12 rounded-lg border-2"
              style={{ borderColor: '#00A859', color: '#00A859' }}
            >
              Limpar Todos os Filtros
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}