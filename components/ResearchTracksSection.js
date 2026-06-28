
import React from 'react';

const tracks = [
  {
    title: 'LLM-Generated Formal Specifications',
    tags: ['AI', 'Foundational CS'],
    description:
      'Investigating whether large language models can generate valid formal specifications (TLA+) directly from plain-English system documentation, connecting AI-assisted verification to the broader formal-methods gap in distributed systems.',
  },
  {
    title: 'Fault Injection for Distributed ML Inference',
    tags: ['AI', 'Foundational CS'],
    description:
      'Systematic fault-injection testing — node failures, network partitions, degraded storage — against multi-replica LLM inference systems, to characterize real-world recovery behavior under failure.',
  },
  {
    title: 'Consistency Models for Healthcare Data Replication',
    tags: ['Computational Healthcare', 'Foundational CS'],
    description:
      'A comparative study of consensus-based replication versus eventual consistency for multi-region healthcare data, evaluated across distinct workload patterns: scheduling data, real-time vitals streaming, and audit logs.',
  },
  {
    title: 'Stateful Edge Computing for Next-Gen Networks',
    tags: ['Telecommunications', 'Foundational CS'],
    description:
      'Extending network-slicing research toward stateful edge compute, exploring how actor-model consistency at the edge can converge with 5G/6G slicing architectures.',
  },
  {
    title: 'Fault-Tolerance Benchmarking for Distributed Training',
    tags: ['AI', 'Foundational CS'],
    description:
      'A systematic benchmark of fault-recovery strategies for large-scale distributed model training, comparing checkpoint-restart and emerging recovery techniques across realistic failure taxonomies.',
  },
  {
    title: 'Local-First Healthcare Data Sync with CRDTs',
    tags: ['Computational Healthcare', 'Foundational CS'],
    description:
      'Conflict-free replicated data types for patient record systems that stay correct and available under network partition, enabling local-first clinical software with real clinical relevance.',
  },
];

const TrackCard = ({ title, tags, description }) => (
  <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition-colors duration-300">
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-semibold uppercase tracking-wide text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
    <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const ResearchTracksSection = () => {
  return (
    <section id="current-research" className="py-24 bg-gray-900/50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Current Research Tracks
          </h2>
          <p className="text-lg text-gray-400">
            Active and near-term work extending our foundations in AI,
            telecommunications, and computational healthcare into
            distributed systems — formal verification, fault tolerance,
            and consistency models for real-world, large-scale systems.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <TrackCard key={track.title} {...track} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchTracksSection;
