import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Plus, ChevronDown } from 'lucide-react-native';
import { useState } from 'react';

export default function HealthPage() {
  const [selectedPet, setSelectedPet] = useState('Bruno');

  const vaccinationRecords = [
    { vaccine: 'Rabies', dateGiven: '12 Apr 25', nextDue: '12 Oct 25', vet: 'Dr. Rao' },
    { vaccine: 'Distemper', dateGiven: '10 Jan 25', nextDue: '10 Jul 25', vet: 'Dr. Kumar' },
  ];

  const dewormingRecords = [
    { medicine: 'Albendazole', dateGiven: '10-03-2025', nextDue: '10-09-2025', notes: '' },
    { medicine: 'Allergahsol', dateGiven: '15-02-2025', nextDue: '15-08-2025', notes: '' },
  ];

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PetPal</Text>
        <TouchableOpacity style={styles.profileButton}>
          <User size={24} color="#3D3D3D" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.titleSection}>
          <Text style={styles.pageTitle}>Vaccination &</Text>
          <Text style={styles.pageTitle}>Deworming Record</Text>
        </View>

        <TouchableOpacity style={styles.selectPet}>
          <Text style={styles.selectPetText}>Select Pet</Text>
          <ChevronDown size={20} color="#3D3D3D" />
        </TouchableOpacity>

        <View style={styles.petCard}>
          <View style={styles.petAvatar}>
            <Text style={styles.petAvatarText}>🐕</Text>
          </View>
          <View style={styles.petInfo}>
            <Text style={styles.petName}>Bruno</Text>
            <Text style={styles.petBreed}>Golden Retriever</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vaccination Records</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderText, { flex: 1.5 }]}>Vaccine</Text>
              <Text style={[styles.tableHeaderText, { flex: 1 }]}>Date</Text>
              <Text style={[styles.tableHeaderText, { flex: 1 }]}>Next Due</Text>
            </View>
            {vaccinationRecords.map((record, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, { flex: 1.5 }]}>{record.vaccine}</Text>
                <Text style={[styles.tableCell, { flex: 1 }]}>{record.dateGiven}</Text>
                <Text style={[styles.tableCell, { flex: 1 }]}>{record.nextDue}</Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={16} color="#FF9A76" strokeWidth={3} />
            <Text style={styles.addButtonText}>Add New Vaccine</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Deworming Records</Text>
          <View style={styles.table}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderText, { flex: 1.5 }]}>Medicine</Text>
              <Text style={[styles.tableHeaderText, { flex: 1 }]}>Date</Text>
              <Text style={[styles.tableHeaderText, { flex: 1 }]}>Next Due</Text>
            </View>
            {dewormingRecords.map((record, index) => (
              <View key={index} style={styles.tableRow}>
                <Text style={[styles.tableCell, { flex: 1.5 }]}>{record.medicine}</Text>
                <Text style={[styles.tableCell, { flex: 1 }]}>
                  {record.dateGiven.split('-')[0]} {record.dateGiven.split('-')[1]}
                </Text>
                <Text style={[styles.tableCell, { flex: 1 }]}>
                  {record.nextDue.split('-')[0]} {record.nextDue.split('-')[1]}
                </Text>
              </View>
            ))}
          </View>
          <TouchableOpacity style={styles.addButton}>
            <Plus size={16} color="#FF9A76" strokeWidth={3} />
            <Text style={styles.addButtonText}>Add Deworming Record</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomPadding} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9F4',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FF9A76',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  titleSection: {
    marginTop: 24,
    marginBottom: 20,
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3D3D3D',
    lineHeight: 34,
  },
  selectPet: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  selectPetText: {
    fontSize: 16,
    color: '#3D3D3D',
    fontWeight: '500',
  },
  petCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  petAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFD6A5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  petAvatarText: {
    fontSize: 32,
  },
  petInfo: {
    flex: 1,
  },
  petName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3D3D3D',
    marginBottom: 4,
  },
  petBreed: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#3D3D3D',
    marginBottom: 12,
  },
  table: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tableHeaderText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#666',
    textTransform: 'uppercase',
  },
  tableRow: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  tableCell: {
    fontSize: 14,
    color: '#3D3D3D',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 12,
  },
  addButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FF9A76',
    marginLeft: 8,
  },
  bottomPadding: {
    height: 20,
  },
});
